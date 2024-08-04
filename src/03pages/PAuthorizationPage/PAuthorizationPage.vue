<template>
  <div class="authorization">
    <div class="container">
      <h2>Welcome to Real Time Chat</h2>

      <el-form
        ref="ruleFormRef"
        class="authorization-form mt-12"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        status-icon
        @submit.prevent
      >
        <h4 class="mb-12">Login to your Chat</h4>
        <s-form-item class="authorization-form-item" prop="email">
          <s-input
            v-model="ruleForm.email"
            type="text"
            label="Email"
            label-position="outside"
            placeholder="Enter your Email..."
          />
        </s-form-item>

        <s-form-item class="authorization-form-item" prop="password">
          <s-input
            v-model="ruleForm.password"
            type="password"
            label="Password"
            label-position="outside"
            placeholder="Enter your password..."
          />
        </s-form-item>

        <div class="authorization-form__controls">
          <s-button appearance="link" :as="'router-link'" :to="ROUTE_NAMES.signup">Create an account</s-button>
          <s-button appearance="primary" size="md" @click="submitForm()">Login</s-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from 'apps/router'
import { FormInstance, FormItemRule, FormRules } from 'element-plus'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ROUTE_NAMES } from 'shared/constants'
import { SFormItem, SInput, SButton } from 'shared/ui'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useFirestore } from 'vuefire'

interface RuleForm {
  password: string
  email: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = ref<RuleForm>({
  password: '',
  email: '',
})

const checkNameNoNumbers: FormItemRule['validator'] = (rule, value, callback) => {
  const regex = /^[a-zA-Zа-яА-ЯёЁ\-]+$/

  if (!regex.test(value)) {
    callback(new Error('Имя не должно содержать числа или спец. символы.'))
  } else {
    callback()
  }
}

const checkPassword: FormItemRule['validator'] = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Write your password, please.'))
  } else if (ruleForm.value.password !== '') {
    if (value.length < 8) {
      callback(new Error('Password must be more 8 symbol.'))
    }

    if (!ruleFormRef.value) return
    ruleFormRef.value.validateField('checkPass')
  }
}

const checkPasswordFormat: FormItemRule['validator'] = (rule, value, callback) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/

  if (!regex.test(value)) {
    callback(
      new Error(
        'The password must contain at least one uppercase and lowercase ' +
          'character, as well as at least one special character.'
      )
    )
  } else {
    callback()
  }
}

const checkEmail: FormItemRule['validator'] = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please, write you email.'))
  }
}

const rules = reactive<FormRules<RuleForm>>({
  // password: [
  //   {
  //     validator: checkPassword,
  //     trigger: 'blur',
  //   },
  //   {
  //     validator: checkPasswordFormat,
  //     trigger: 'change',
  //   },
  // ],
  // email: [
  //   {
  //     validator: checkEmail,
  //     trigger: 'blur',
  //   },
  // ],
})

const submitForm = async () => {
  const auth = getAuth()
  const email = ruleForm.value.email
  const password = ruleForm.value.password

  await ruleFormRef.value?.validate(async (valid, fields) => {
    if (valid) {
      try {
        const response = await signInWithEmailAndPassword(auth, email, password)

        console.log('User signed in:', response.user)

        if (response.user) {
          const db = useFirestore()
          const usersCollectionRef = collection(db, 'users')
          const q = query(usersCollectionRef, where('id', '==', response.user.uid))
          const querySnapshot = await getDocs(q)

          console.log(response.user.uid)

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const userData = doc.data()

              console.log(userData)

              localStorage.setItem('id', userData.id)

              localStorage.setItem('name', userData.name)

              localStorage.setItem('email', userData.email)

              localStorage.setItem('photoURL', userData.URL)

              localStorage.setItem('description', userData.description)

              localStorage.setItem('FirebaseDocumentId', doc.id)

              router.push(ROUTE_NAMES.chat)
            })
          } else {
            console.error('No such document!')
          }
        }
      } catch (error) {
        console.error('Error during sign in:', error)
      }
    } else {
      console.log('Error submit:', fields)
    }
  })
}
</script>

<style scoped lang="scss">
.authorization {
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
  }
}

.authorization-form {
  width: 100%;
  max-width: 900px;
  box-shadow: rgb(0 0 0 / 0.2) 0 12px 28px 0, rgb(0 0 0 / 0.1) 0 2px 4px 0, rgb(255 255 255 / 0.05) 0 0 0 1px inset;
  padding: 15px;
  margin: 24px auto 0;

  &__controls {
    display: flex;
    margin-top: 24px;
    gap: 8px;
  }
}

.authorization-form-item {
  margin-top: 8px;
}
</style>
