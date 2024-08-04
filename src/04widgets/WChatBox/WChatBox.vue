<template>
  <div class="chat-container">
    <header>
      <div class="header">
        <img :src="currentPeerUser.URL" alt="peer" class="header-image" />
        <div class="header-name">
          <h6 class="header-text">{{ currentPeerUser.name }}</h6>
        </div>
      </div>
    </header>
    <div class="chat-body">
      <h2 class="welcome">Welcome to Chatbox</h2>
      <div class="text-outer">
        <div
          v-for="item in listMessage"
          :key="item.id"
          :class="item.idFrom === currentUserId ? 'textFrom' : 'textTo'"
          class="text-inner"
        >
          <h6>{{ item.content }}</h6>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer">
        <div class="footer-inner">
          <img class="icon pointer" src="apps/assets/images/picture.png" alt="select picture" />
          <img class="icon pointer" src="apps/assets/images/sticker.png" alt="select sticker" />
          <input v-model="inputValue" type="text" class="input" @keyup.enter="sendMessage(inputValue)" />
          <img
            class="icon pointer"
            src="apps/assets/images/send.png"
            alt="send message"
            @click="sendMessage(inputValue)"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { getFirestore, collection, doc, onSnapshot, setDoc } from 'firebase/firestore'
import moment from 'moment'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useFirebaseApp } from 'vuefire'

const router = useRouter()
const firebaseApp = useFirebaseApp()
const db = getFirestore(firebaseApp)

const props = defineProps(['currentPeerUser'])

const currentUserName = ref(localStorage.getItem('name'))
const currentUserId = ref(localStorage.getItem('id'))
const inputValue = ref('')
const listMessage = ref([])
const groupChatId = ref(null)

const getGroupChatId = (id1, id2) => {
  return [id1, id2].sort().join('_')
}

const sendMessage = async (content) => {
  if (content.trim() === '') {
    return
  }

  const timestamp = moment().valueOf().toString()
  const message = {
    id: timestamp,
    idFrom: currentUserId.value,
    idTo: props.currentPeerUser.id,
    timestamp: timestamp,
    content: content.trim(),
  }

  if (groupChatId.value) {
    const chatDocRef = doc(db, 'Messages', groupChatId.value)
    const messagesCollectionRef = collection(chatDocRef, 'messages')

    await setDoc(doc(messagesCollectionRef, timestamp), message)

    inputValue.value = ''
  } else {
    console.error('groupChatId is not set correctly.')
  }
}

const getMessages = () => {
  listMessage.value = []

  groupChatId.value = getGroupChatId(props.currentPeerUser.id, currentUserId.value)

  if (groupChatId.value) {
    const chatDocRef = doc(db, 'Messages', groupChatId.value)
    const messagesCollectionRef = collection(chatDocRef, 'messages')

    onSnapshot(messagesCollectionRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          listMessage.value.push(change.doc.data())

          console.log(listMessage.value)
        }
      })
    })
  } else {
    console.error('groupChatId is not set correctly.')
  }
}

watch(
  () => props.currentPeerUser,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      getMessages()
    }
  }
)

onMounted(() => {
  if (props.currentPeerUser) {
    getMessages()
  }
})
</script>

<style scoped lang="scss">
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  display: flex;
  align-items: center;
  background: var(--color-black-white-95);
  padding: 0 10px;
}

.header-image {
  width: 40px;
  border-radius: 50%;
}

.header-name {
  margin-left: 10px;
}

.header-text {
  font-weight: 600;
  margin-top: 10px;
}

.chat-body {
  flex: 1;
  background: #efe9e2;
  padding: 10px;
  overflow-y: auto;
}

.welcome {
  font-weight: 600;
  color: #635a5a;
  margin: 10px 0 32px;
}

.text-outer {
  display: flex;
  flex-direction: column;
}

.text-inner {
  width: 20%;
  border-radius: 0.5rem;
  padding: 10px 10px 2px;
  margin-bottom: 20px;
}

.textFrom {
  align-self: flex-end;
  color: var(--color-white);
  background: var(--color-primary-black-40);
}

.textTo {
  align-self: flex-start;
  color: var(--color-black);
  background: var(--color-secondary-white-80);
}

.footer {
  min-height: 60px;
  background: var(--color-black-white-95);
}

.footer-inner {
  display: flex;
  align-items: center;
  padding: 15px;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}

.input {
  width: 85%;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 15px;
}

.pointer {
  cursor: pointer;
}
</style>
