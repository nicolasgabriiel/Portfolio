import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import linguage from './linguage'
import 'normalize.css';

createApp(App).use(store).use(router).use(linguage).mount('#app')
