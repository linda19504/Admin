import { defineStore } from 'pinia'
import { PRIMARY_COLOR } from '../../config'
export const useSettingStore = defineStore({
  id: 'settingState',
  state: () => ({
    isReload: true,
    isCollapse: true,
    withoutAnimation: false,
    themeConfig:{
      primary: PRIMARY_COLOR,
    }
  }),
  getters: {},
  actions: {
    setCollapse(value) {
      this.isCollapse = value
      this.withoutAnimation = false
    },
    setReload() {
      this.isReload = false
      setTimeout(() => {
        this.isReload = true
      }, 50)
    },
    closeSideBar({ withoutAnimation }) {
      this.isCollapse = false
      this.withoutAnimation = withoutAnimation
    }
  }
})
