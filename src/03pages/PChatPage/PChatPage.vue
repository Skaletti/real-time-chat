<template>
  <div class="wrapper">
    <nav class="sidebar">
      <div class="sidebar-header">
        <div class="profile-header" @click="onProfileClick">
          <img :src="photoURL" alt="user" class="profile-avatar" />
        </div>
        <button type="button" class="btn btn-primary" @click="logout">Logout</button>
      </div>
      <div class="divider" />
      <ul class="user-list">
        <li
          v-for="user in searchUsers"
          v-show="user.id !== currentUserId"
          :key="user.id"
          class="user-item"
          @click="letsChat(user)"
        >
          <div class="user-info">
            <img :src="user.URL" alt="user" class="user-avatar" />
            <div class="user-name">{{ user.name }}</div>
          </div>
          <div class="divider" />
        </li>
      </ul>
    </nav>

    <div v-if="!currentPeerUser" id="content">
      <div class="welcome">
        <img :src="photoURL" class="welcome-avatar" />
        <h2>Welcome {{ currentUserName }},</h2>
        <h3>Let's spread love</h3>
      </div>
    </div>
    <div v-else class="chatbox-container">
      <w-chat-box :current-peer-user="currentPeerUser" />
    </div>
  </div>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFirebaseApp } from 'vuefire'
import { WChatBox } from 'widgets'

const router = useRouter()
const firebaseApp = useFirebaseApp()
const db = getFirestore(firebaseApp)

const currentUserName = ref(localStorage.getItem('name'))
const currentPeerUser = ref(null)
const currentUserId = ref(localStorage.getItem('id'))
const currentUserPhoto = ref(localStorage.getItem('photoURL'))
const searchUsers = ref([])
const photoURL = ref(localStorage.getItem('photoURL'))

const onProfileClick = () => {
  router.push('/profile')
}

const logout = async () => {
  const auth = getAuth()

  await signOut(auth)

  await router.push('/')

  localStorage.clear()
}

const letsChat = (user) => {
  currentPeerUser.value = user
}

const getUserList = async () => {
  const usersSnapshot = await getDocs(collection(db, 'users'))

  usersSnapshot.forEach((doc) => {
    const userData = doc.data()

    searchUsers.value.push({
      id: userData.id,
      name: userData.name,
      URL: userData.URL,
      description: userData.description,
    })
  })
}

onMounted(() => {
  if (!localStorage.getItem('id')) router.push('/')
  getUserList()
})
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
}

.sidebar {
  width: 300px;
  color: var(--color-white);
  background: #343a40;
  padding: 20px;

  .sidebar-header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    .profile-header {
      width: 160px;
      display: flex;
      cursor: pointer;
      margin-right: 25px;

      .profile-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-white);
      }
    }

    .btn {
      border: none;
      color: var(--color-white);
      background-color: var(--color-primary);
      cursor: pointer;
      padding: 10px 20px;
    }
  }

  .divider {
    height: 1px;
    border-bottom: 1px solid var(--color-primary);
    margin-bottom: 20px;
  }

  .user-list {
    list-style: none;
    padding: 0;

    .user-item {
      display: flex;
      cursor: pointer;
      padding-bottom: 15px;

      .user-info {
        display: flex;
        align-items: center;

        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-white);
          margin-right: 10px;
        }

        .user-name {
          font-weight: 600;
        }
      }

      .divider {
        height: 1px;
        border-bottom: 1px solid var(--color-primary);
        margin-top: 15px;
      }
    }
  }
}

#content {
  flex-grow: 1;
  padding: 20px;

  .welcome {
    text-align: center;

    .welcome-avatar {
      width: 200px;
      border-radius: 50%;
    }
  }
}

.chatbox-container {
  top: 0;
  right: 0;
  width: calc(100% - 350px);
  min-height: 100vh;
  position: absolute;
  transition: all 0.3s;
}
</style>
