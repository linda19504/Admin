import { filterArgTypes } from "storybook/internal/preview-api"

//通过递归过滤异步路由表
export function filterAsyncRoutes(routes, roles) {
    const res = []//存储过滤后的路由结果
    routes.forEach((route) => {
      const tmp = { ...route }//创建当前路由的浅拷贝（避免修改原始数据）
      if (hasPermission(roles, tmp)) {//检查当前角色是否有访问权限
        if (tmp.children) {//如果有子路由
          tmp.children = filterAsyncRoutes(tmp.children, roles)//递归过滤子路由
        }
        res.push(tmp)// 将符合条件的路由加入结果
      }
    })
    return res
  }
//使用 meta.role 来确定当前用户是否具有权限
  export function hasPermission(roles, route) {//roles为用户拥有的角色数组，route为当前路由对象 
    if (route.meta && route.meta.roles) {
      return roles.some((role) => route.meta.roles.includes(role))//判断用户角色数组中是否存在至少一个匹配的权限
    } else {
      return false
    }
  }


//使用递归过滤需要缓存的路由
export function filterKeepAlive(routers) {
  const cacheRouter = []//定义结果缓存数组
  const deep = (routers) => {//定义递归遍历函数
    routers.forEach((item) => {
      if (item.meta?.keepAlive && item.name) {//检查item.meta是否存在并且item.meta.keepAlive为真【?.可选链操作符】
        cacheRouter.push(item.name)
      }
      if (item.children && item.children.length) {//处理子路由
        deep(item.children)//递归遍历子路由
      }
    })
  }
  deep(routers)//启动递归遍历整个路由树
  return cacheRouter
}