import { request } from '@/utils/request.js'
import { defineStore } from 'pinia'
import { setJwtToken, saveUser } from '@/utils/storage.js'

export const useUserStore = defineStore({
  
  id: 'user',
  state: () => ({
    user: null
  }),
  getters: {
    isLogin: (state) => {
      return state.user !== null
    }
  },
  actions: {
    async register(email, username, password) {
      try {
        const result = await request('/api/auth/local/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            email: email,
            username: username,
            password: password
          },
          user: false
        })
        setJwtToken(result.jwt)
        saveUser(result.user)
        return result.user
      } catch (error) {
        console.error(error)
      }
    },
    async login(email, password) {
      try {
        const result = await request('/api/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            identifier: email,
            password: password
          },
          user: false
        })
        setJwtToken(result.jwt)
        saveUser(result.user)
        return result.user
      } catch (error) {
        console.error(error)
      }
    }
  }
})

