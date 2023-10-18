import "normalize.css"
import "./assets/css/index.less"
import { createApp } from 'vue'
import App from './App.vue'


import router from './router'

createApp(App).use(router).mount('#app')
