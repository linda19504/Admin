import { defineStore } from 'pinia'
// import { asyncRoutes, constantRoutes, routerArray, notFoundRouter } from '@/routers/index_router'
import { hasPermission, filterAsyncRoutes,filterKeepAlive} from '@/utils/permission'
export const usePermissionStore = defineStore({
    
    id :'permissonState',

    state:()=>({
        route:[],
        addRoutes:[],
        cacheRoutes:{},//缓存需要保存的路由信息  
    }),
    getters:{
        //返回 state.routes，即所有路由信息
         permission_routes:(state)=>{
            return state.routes
         },
    //    
         //调用 filterKeepAlive(asyncRoutes)，返回需要缓存的路由
         //过滤需要缓存的路由
         keepAliveRoutes:(state)=>{
            return filterKeepAlive(asyncRoutes)
         }
    },
    actions:{
          //根据角色生成动态路由的异步操作
         // 普通用户（非admin）：使用 filterAsyncRoutes 过滤出有权限的路由
        //管理员（admin）或无角色：获取全部异步路由
        generateRoutes(roles){
            return new Promise ((resolve)=>{
                let accessedRoutes
                if(roles&&roles.length&&!roles.includes('admin')){
                    accessedRoutes = filterAsyncRoutes(asyncRoutes,roles )
                    //如果用户有角色且角色中不包含 'admin'，则使用 filterAsyncRoutes 函数过滤出该角色可以访问的路由
                }else{ 
                    accessedRoutes= asyncRoutes||[]
                    //如果用户是管理员或没有指定角色，则直接使用 asyncRoutes 或空数组作为可访问的路由
                }
                accessedRoutes = accessedRoutes.concat(notFoundRouter)
                this.routes = constantRoutes.concat(accessedRoutes)
                this.addRoutes = accessedRoutes
                resolve(accessedRoutes)

            })
        }
    }
})