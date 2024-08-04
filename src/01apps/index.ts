import App from 'apps/App.vue'
import router from 'apps/router'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'

import { firebaseApp } from './services/firebase'

import 'element-plus/dist/index.css'

import 'virtual:svg-icons-register'

import 'apps/styles/index.scss'

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

export { app }
