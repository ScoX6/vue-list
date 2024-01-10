import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.provide('rootMessage', 'Hello from Root')
app.mount('#app')
