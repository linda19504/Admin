import { defineStore } from 'pinia'
// import axios from 'axios'
// import router from '@/router'

//认证流程和状态管理
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL
// })

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })
export const useUserStore = defineStore({
  id: 'userState',
  state: () => ({
    token: null,
    userInfo: {  },
    roles: localStorage.roles ? JSON.parse(localStorage.roles) : [],
  }),
  // state: () => ({
  //   token: localStorage.getItem('token') || null,
  //   userInfo: JSON.parse(
  //     localStorage.getItem('userInfo') || '{"avatar_url":"avatar_three.jpg","username":"","email":""}'
  //   ),
  //   roles: JSON.parse(localStorage.getItem('roles') ||'[]' )
  // }),
  // actions: {
  //   async login(userInfo) {
  //     try {
  //       const { username, password } = userInfo
  //       // 实际API请求
  //       const response = await api.post('/auth/login', {
  //         username,
  //         password
  //       })
  //       const { token, user } = response.data
  //       // 更新状态
  //       this.token = token
  //       this.userInfo = { ...user, avatar_url: user.avatar_url || 'avatar_three.jpg' }
  //       // 持久化存储
  //       localStorage.setItem('token', token)
  //       localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
  //       // 获取用户角色
  //       await this.getRoles()
  //       // 设置axios默认token
  //       api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //       return user
  //     } catch (error) {
  //       console.error('登录失败:', error)
  //       this.logout() // 登录失败时清除状态
  //       throw error
  //     }
  //   },
  //   async getInfo(roles) {
  //     // return new Promise((resolve, reject) => {
  //     //   this.roles = roles
  //     //   resolve(roles)
  //     // })
  //     try {
  //       const response = await api.get('/user/info')
  //       this.userInfo = {
  //         ...response.data,
  //         avatar_url: response.data.avatar_url || 'avatar_three.jpg'
  //       }
  //       // 持久化存储
  //       localStorage.setItem('userInfo', JSON.stringify(this.userInfo))

  //       return this.userInfo
  //     } catch (error) {
  //       console.error('获取用户信息失败:', error)
  //       throw error
  //     }
  //   },
  //   async getRoles() {
  //     // return new Promise((resolve, reject) => {
  //     //   this.roles = ['admin']
  //     //   localStorage.roles = JSON.stringify(this.roles)bvc
  //     //   resolve(this.roles)
  //     // })
  //     try {
  //       const response = await api.get('/user/roles')
  //       this.roles = response.date.roles || ['admin']
  //       // 持久化存储
  //       localStorage.setItem('roles', JSON.stringify(this.roles))
  //     } catch (error) {
  //       console.error('获取角色失败:', error)

  //       if (error.response?.status === 401) {
  //         this.logout()
  //         router.push('/login')
  //       }
  //       throw error
  //     }
  //   },
  // },
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
      console.log("getInfo : "  + JSON.stringify(roles))
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
    }
  },
  // 清除状态
  // this.token = null
  // this.userInfo = { avatar_url: 'avatar_three.jpg', username: '', email: '' }
  // this.roles = []

  // 清除本地存储
  // localStorage.removeItem('token')
  // localStorage.removeItem('userInfo')
  // localStorage.removeItem('roles')

  // 移除axios授权头
  // delete api.defaults.headers.common['Authorization']

  // 跳转到登录页
  // router.push('/login')
  // }
  // 进行持久化存储
  persist: {
    // 本地存储的名称
    key: 'userState',
    //保存的位置
    storage: window.localStorage //localstorage
  }
})
