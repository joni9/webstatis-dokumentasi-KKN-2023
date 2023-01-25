import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tw-elements';
import './assets/main.css'
document.documentElement.classList.add('js')
const app = createApp(App)

app.use(router)

app.mount('#app')
