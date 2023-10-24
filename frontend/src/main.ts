import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import Login from './components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  
  { path: '/login', component: Login },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');


