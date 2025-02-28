import { defineStore } from 'pinia'
import { hasPermission, filterAsyncRoutes, filterKeepAlive } from '@/utils/permission.js'
export const usePermissionStore = defineStore({
    id :'permissonState',
    state:()=>({
        route:[],
        addRouts:[],
        cacheRoutes:{},
    }),
    getters:{
        //获取全部权限路由
         permission_routes:(state)=>{
            return state.routes
         },
         //获取需缓存的路由
         keepAliveRoutes:(state)=>{
            return filterKeepAlive(asyncRoutes)
         }
    },
    actions:{
        generateRoutes(roles){
            return new promise ((reslove)=>{
                let accessedRoutes
                if(roles&&roles.length&&!roles.includes('admin')){
                    accessedRoutes = filterAsyncRoutes(async,roles )
                }else{
                    accessedRoutes= asyncRoutes||[]
                }

            })
        }
    }
})