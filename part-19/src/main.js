import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue'

let app = createApp(App)
app.component("GlobalComponent", GlobalComponent) // 全局引入
app.mount('#app')
