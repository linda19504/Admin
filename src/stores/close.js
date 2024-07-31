import { defineStore } from 'pinia';

export const useCloseStore = defineStore('close', {
  state: () => ({ close: false }),
  actions: {
    closeClick() {
      this.close = true;
    },
  },
});