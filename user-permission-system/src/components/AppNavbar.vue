<template>
  <nav>
    <ul>
      <li><a href="#">首页</a></li>
      <li v-if="userStore.isLoggedIn">
        <a href="#">用户中心</a>
      </li>
      <li v-if="hasPermission('admin')">
        <a href="#">管理后台</a>
      </li>
      <li v-if="userStore.isLoggedIn">
        <a @click="userStore.logout">退出登录</a>
      </li>
      <li v-else>
        <a href="#" @click.prevent="$router.push({ name: 'Login' })">登录</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();

const hasPermission = (permission) => {
  return userStore.permissions.includes(permission);
};
</script>
