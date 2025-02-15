import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userRole: null,
    permissions: []
  }),
  actions: {
    login(role, permissions) {
      this.isLoggedIn = true;
      this.userRole = role;
      this.permissions = permissions;
    },
    logout() {
      this.isLoggedIn = false;
      this.userRole = null;
      this.permissions = [];
    }
  }
});
