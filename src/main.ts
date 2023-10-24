import "normalize.css"
import "./assets/css/index.less"
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from "./store"
import registerIcon from "@/gobal/register-cions"
import 'element-plus/theme-chalk/el-message.css'
import useLoginStore from "./store/login/login"
const app = createApp(App)
app.use(registerIcon)
app.use(pinia)
const localStore = useLoginStore()
localStore.loadLoaclCacheAction()
app.use(router)
app.mount('#app')


