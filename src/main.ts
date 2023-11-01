import 'normalize.css'
import './assets/css/index.less'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import registerIcon from '@/gobal/register-cions'
import 'element-plus/theme-chalk/el-message.css'
const app = createApp(App)
app.use(registerIcon)
app.use(store)
app.use(router)
app.mount('#app')
