import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userState',
  state: () => ({
    token: null,
    userInfo: { avatar_url:"",username:""},
    roles: localStorage.roles ? JSON.parse(localStorage.roles) : [],
  }),
  getters: {},
  actions: {
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise(async (resolve, reject) => {
        this.token = username
        this.userInfo = userInfo
        await this.getRoles()
        resolve(username)
      })
    },
    getRoles() {
      return new Promise((resolve, reject) => {
        this.roles = ['admin']
        localStorage.roles = JSON.stringify(this.roles)
        resolve(this.roles)
      })
    },
    getInfo(roles) {
      return new Promise((resolve, reject) => {
        this.roles = roles
        resolve(roles)
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        this.token = null
        this.userInfo = {}
        this.roles = []
        resolve(null)
      })
    },
  },

  persist: {
    key: 'userState',
    storage: window.localStorage,
  },
})
