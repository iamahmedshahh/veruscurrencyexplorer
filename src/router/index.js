// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../views/Settings.vue';
import CurrenciesVue from '../views/Currencies.vue';
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/currencies',
    name: 'Currencies',
    component: CurrenciesVue
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-menu"
});

export default router;
