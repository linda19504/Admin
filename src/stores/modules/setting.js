import { defineStore } from 'pinia'
import { PRIMARY_COLOR } from '../../config'
export const useSettingStore = defineStore({
  id: 'settingState',
  state: () => ({
    device: 'desktop',
    isReload: true,
    isCollapse: true,
    withoutAnimation: false,
    themeConfig: {
      // 显示设置
      showSetting: false,
      // 菜单展示模式 默认 vertical   horizontal / vertical /columns
      mode: 'vertical',
      // tagsView 是否展示 默认展示
      showTag: true,
      // 页脚
      footer: true,
      // 深色模式 切换暗黑模式
      isDark: false,
      // 显示侧边栏Logo
      showLogo: true,
      // 主题颜色
      primary: PRIMARY_COLOR,
      // element组件大小
      globalComSize: 'default',
      // 是否只保持一个子菜单的展开
      uniqueOpened: true,
      // 固定header
      fixedHeader: true,
      // 灰色模式
      gray: false,
      // 色弱模式
      weak: false
    }
  }),
  getters: {},
  actions: {
    // 设置主题
    setThemeConfig({ key, val }) {
      this.themeConfig[key] = val
    },
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
