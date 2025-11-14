import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus); // Register Element Plus with your Vue app
app.use(router)

app.mount('#app')
