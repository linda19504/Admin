import { request } from '@/utils/request.js'
import { defineStore } from 'pinia'
import { setJwtToken, saveUser } from '@/utils/storage.js'

// import { createPinia } from 'pinia'
// import axios from 'axios'
// import Cookies from 'js-cookie'

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

// async login(email, password) {
//   // try {
//     const result = await request('/api/auth/local/register',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         identifier: email,
//         password: password
//       })
//     })
//     setJwtToken(result.jwt);
//     saveUser(result.user);
//     return result.user;

// const response = await request('/api/auth/local', options)
// const data = await response.json()
// this.user = data
// }) catch (error) {
//   console.error(error)
// }
//       }
//   }
// }

// export const useUserStore = defineStore('user', () => {
//   const jwt_token = Cookies.get('jwt_token')

//   const user = reactive({
//     jwt_token: jwt_token
//   })

//   const isLogin = computed(() => (user.jwt_token ? true : false))

//   async function register({ username, email, password }) {
//     const options = {
//       method: 'POST',
//       url: '/api/auth/local/register',
//       data: { username, email, password }
//     }

//     try {
//       const { data } = await axios.request(options)
//       console.log(data)
//       // TODO
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async function login({ email, password }) {
//     const options = {
//       method: 'POST',
//       url: '/api/auth/local',
//       data: { identifier: email, password }
//     }

//     try {
//       const { data } = await axios.request(options)
//       console.log(data)
//       const { jwt } = data

//       if (jwt) {
//         Cookies.set('jwt_token', jwt)
//       }
//       user.jwt_token = jwt
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return { user, isLogin, register, login }
// })
