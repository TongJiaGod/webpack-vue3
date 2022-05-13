import { createApp } from 'vue';
import pinia from './pinia/index';
import router from './router/router';
import App from './App.vue';

createApp(App).use(pinia).use(router).mount('#app');
