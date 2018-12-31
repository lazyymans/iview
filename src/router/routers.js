/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */
const Login = () => import('@/view/login/login.vue')
const Home = () => import('@/view/home/home.vue')
const Blog = () => import('@/view/blog/blog.vue')

const menus = [
  {
    path: '/blog',
    name: 'blog',
    meta: {
      title: '博客管理',
      hideInMenu: false,
      notCache: true,
      leaf: true,
      icon: 'ios-analytics'
    },
    component: Blog,
  }
]

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true
    },
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      hideInMenu: true
    },
    component: Home,
    children: menus
  },
]


