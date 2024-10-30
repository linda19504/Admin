import { defineStore } from 'pinia'
export const useSettingStore = defineStore({
    id: 'settingState',
    state:()=>({
        isReload: true,
    }),
    getters: {},
    actions:{
        setReload() {
            this.isReload = false
            setTimeout(() => {
              this.isReload = true
            }, 50)
          }, 
    }
})