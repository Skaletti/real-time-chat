<template>
  <div class="profile">
    <div class="container">
      <h2>Chat User Profile Page Dashboard</h2>
      <div class="profile__avatar">
        <img :src="photoURL" class="profile__avatar-image" />
        <label class="profile__avatar-change">
          <s-icon name="interface-change-icon" class="profile__avatar-change-icon" />
          <input type="file" name="upload" class="profile__avatar-change-input" @change="changeAvatar" />
        </label>
      </div>

      <div class="profile__form">
        <s-input v-model="name" label="Name" label-position="inside" type="text" />
        <s-input v-model="aboutMe" label="Tell me about yourself" label-position="inside" type="textarea" />

        <div class="profile__form-buttons">
          <s-button appearance="primary" @click="uploadAvatar">Save</s-button>
          <s-button appearance="link" @click="goBack">Back</s-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { doc, updateDoc } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { SIcon, SInput, SButton } from 'shared/ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFirestore, useStorage } from 'vuefire'

const router = useRouter()

const firebaseDocId = ref(localStorage.getItem('FirebaseDocumentId'))
const id = ref(localStorage.getItem('id'))
const name = ref(localStorage.getItem('name') || '')
const aboutMe = ref(localStorage.getItem('description') || '')
const photoURL = ref(localStorage.getItem('photoURL'))
const newPhoto = ref<File | null>(null)

const goBack = () => {
  router.push('/chat')
}

const changeAvatar = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target.files && target.files[0]) {
    const fileType = target.files[0].type.toString()

    if (!fileType.startsWith('image/')) {
      alert('Please choose an image')

      return
    }

    newPhoto.value = target.files[0]

    photoURL.value = URL.createObjectURL(target.files[0])
  } else {
    alert('Something went wrong!')
  }
}

const uploadAvatar = async () => {
  if (!id.value || !firebaseDocId.value) {
    alert('User ID or Document ID is missing.')

    return
  }

  try {
    let downloadURL = photoURL.value

    if (newPhoto.value) {
      const storage = useStorage()
      const storageReference = storageRef(storage, `avatars/${id.value}`)

      await uploadBytes(storageReference, newPhoto.value)

      downloadURL = await getDownloadURL(storageReference)
    }

    await updateUserInfo(downloadURL)
  } catch (error) {
    console.error('Error uploading avatar:', error)

    alert('Error uploading avatar. Please try again.')
  }
}

const updateUserInfo = async (downloadURL: string | null) => {
  const db = useFirestore()
  const userDocRef = doc(db, 'users', firebaseDocId.value!)

  const newInfo = {
    name: name.value,
    description: aboutMe.value,
    ...(downloadURL ? { URL: downloadURL } : {}),
  }

  try {
    await updateDoc(userDocRef, newInfo)

    localStorage.setItem('name', name.value)

    localStorage.setItem('description', aboutMe.value)

    if (downloadURL) {
      localStorage.setItem('photoURL', downloadURL)
    }

    alert('Profile updated successfully!')
  } catch (error) {
    console.error('Error updating profile:', error)

    alert('Error updating profile. Please try again.')
  }
}

if (!localStorage.hasOwnProperty('id')) {
  router.push('/')
}
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
  }

  &__avatar {
    position: relative;
    display: flex;
    align-items: center;

    &-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    &-change {
      right: 0;
      bottom: 0;
      position: absolute;
      cursor: pointer;

      &-input {
        display: none;
      }
    }
  }

  &__form {
    width: 100%;
    max-width: 600px;
    box-shadow: rgb(0 0 0 / 0.1) 0 2px 4px;
    padding: 20px;

    &-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
}
</style>
