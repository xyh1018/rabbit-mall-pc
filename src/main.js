import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import plugin from '@/components/library/index'
import '@/assets/styles/common.less'

const app = createApp(App)

app.use(plugin).use(store).use(router).mount('#app')
