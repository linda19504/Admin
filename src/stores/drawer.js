import { defineStore } from 'pinia';

export const useDrawerStore = defineStore('drawer', {
  state: () => ({ drawer: false }),
  actions: {
    drawerClick() {
      this.drawer = true;
    },
  },
});