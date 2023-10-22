import "normalize.css"
import "./assets/css/index.less"
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pina from "./store"
import registerIcon from "@/gobal/register-cions"
import 'element-plus/theme-chalk/el-message.css'

createApp(App).use(registerIcon).use(router).use(pina).mount('#app')


