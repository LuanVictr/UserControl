import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import Login from './components/Login.vue'
import Sign from './components/Sign.vue';
import Address from './components/Address.vue';
import AddressCreate from './components/AddressCreate.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import useUserStore from './store/UserStore';

const routes = [

  { path: '/login', component: Login },
  { path: '/', component: Login },
  { path: '/sign', component: Sign },
  { path: '/address', component: Address },
  { path: '/address/create', component: AddressCreate },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(createPinia());
app.provide('userStore', useUserStore());

app.use(router);

app.mount('#app');
