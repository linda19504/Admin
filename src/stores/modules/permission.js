//通过递归过滤异步路由表
export function filterAsyncRoutes(routes, roles) {
    const res = []
    routes.forEach((route) => {
      const tmp = { ...route }
      if (hasPermission(roles, tmp)) {
        if (tmp.children) {
          tmp.children = filterAsyncRoutes(tmp.children, roles)
        }
        res.push(tmp)
      }
    })
    return res
  }
  