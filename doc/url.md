# URL 设计

## 主页

`/`

别名：

`/home`

## 登录页

`/login`

## setting 页

- 显示第1页,一页显示50条:
  `/settings?limit=50,offset=0`

  > 因为offset偏移量是0;limit一页显示的数量是50

- 显示第2页,一页显示50条:
  `/settings?limit=50,offset=50`

  > 因为offset偏移量是50;limit一页显示的数量是50

## 我的申请单

- 显示第1页,一页显示50条:
  `/my-requests/?limit=50,offset=0`

  > 因为offset偏移量是0;limit一页显示的数量是50

## 我的审批单

- 显示第1页,一页显示50条:
  `/my-approvals/?limit=50,offset=0`

  > 因为offset偏移量是0;limit一页显示的数量是50

## 用户信息

`/user-profile`
