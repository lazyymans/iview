/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    title: '登陆',
    hidden: true,
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    hidden: true,
    component: () => import('@/view/home/home.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    title: '博客管理',
    iconCls: 'ios-analytics',
    hidden: false,
    leaf: true,
    component: () => import('@/view/blog/blog.vue'),
    children: []
  },
]
