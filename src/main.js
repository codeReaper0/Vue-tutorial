import { createApp } from 'vue';
import App from './pages/App.vue';
import './assets/css/main.css';
import router from './router.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
