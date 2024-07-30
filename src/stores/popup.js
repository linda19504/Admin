import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popup', {
  state: () => ({ popup: false }),
  actions: {
    popupClick() {
      this.popup = true;
    },
  },
});