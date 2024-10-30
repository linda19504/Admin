import { defineStore } from 'pinia'
import router from '@/router/index'

export const useTagsViewStore = defineStore({
  id: 'tagsViewState',
  state: () => ({
    activeTabsValue: '/LoginPage',
    visitedViews: [],
    cachedViews: [],
  }),
  getters: {},
  actions: {
    setTabsMenuValue(val) {
      this.activeTabsValue = val
    },//设置标签菜单的值
    addView(view) {
      this.addVisitedView(view)
    },
    removeView(routes) {
      return new Promise((resolve, reject) => {
        this.visitedViews = this.visitedViews.filter((item) => !routes.includes(item.path))
        resolve(null)
      })
    },
    addVisitedView(view) {
      this.setTabsMenuValue(view.path)//设置标签菜单的值
      if (this.visitedViews.some((v) => v.path === view.path)) return//检查 visitedViews 数组中是否已经存在与 view.path 相同的路由

      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name',
        }),//创建新对象（包含原始视图对象的属性）
      )
      if (view.meta.keepAlive) {
        this.cachedViews.push(view.name)
      }
    },
    delView(activeTabPath) {
      return new Promise((resolve) => {
        this.delVisitedView(activeTabPath)
        this.delCachedView(activeTabPath)
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews],
        })
      })
    },//删除指定活动标签页路径对应的视图
    toLastView(activeTabPath) {
      const index = this.visitedViews.findIndex((item) => item.path === activeTabPath)
      const nextTab = this.visitedViews[index + 1] || this.visitedViews[index - 1]//据当前视图对象的索引，确定下一个视图对象或上一个视图对象
      if (!nextTab) return
      
      router.push(nextTab.path)//将页面导航到下一个视图对象的路径
      this.addVisitedView(nextTab)
    },
    delVisitedView(path) {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((v) => {
          return v.path !== path || v.meta.affix
        })//过滤操作，更新 cachedViews 数组，保留那些路径不等于 path 或者具有 meta.affix 属性的视图对象
        this.cachedViews = this.cachedViews.filter((v) => {
          return v.path !== path || v.meta.affix
        })
        resolve([...this.visitedViews])
      })
    },
    delCachedView(view) {
      return new Promise((resolve) => {
        const index = this.cachedViews.indexOf(view.name)
        index > -1 && this.cachedViews.splice(index, 1)
        resolve([...this.cachedViews])
      })
    },
    clearVisitedView() {
      this.delAllViews()
    },
    delAllViews() {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((v) => v.meta.affix)
        this.cachedViews = this.visitedViews.filter((v) => v.meta.affix)
        resolve([...this.visitedViews])
      })
    },
    delOtherViews(path) {
      this.visitedViews = this.visitedViews.filter((item) => {
        return item.path === path || item.meta.affix
      })
      this.cachedViews = this.visitedViews.filter((item) => {
        return item.path === path || item.meta.affix
      })
    },
    goHome() {
      this.activeTabsValue = '/home'
      router.push({ path: '/home' })
    },
    updateVisitedView(view) {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    },
  },
})
