<template>
  <div>
    <h2>登录</h2>
    <input v-model="role" placeholder="请输入用户角色" />
    <input v-model="permissions" placeholder="请输入权限列表，用逗号分隔" />
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();
const role = ref('');
const permissions = ref('');

const handleLogin = () => {
  const permissionList = permissions.value.split(',');
  userStore.login(role.value, permissionList);
  role.value = '';
  permissions.value = '';
};
</script>
