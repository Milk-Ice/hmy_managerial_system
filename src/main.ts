import "normalize.css"
import "./assets/css/index.less"
import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import pina from "./store"

createApp(App).use(router).use(pina).mount('#app')
