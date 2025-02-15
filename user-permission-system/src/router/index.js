import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';

const routes = [
  {
    path: '/',
    redirect: '/login' // 将根路径重定向到登录页面
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
