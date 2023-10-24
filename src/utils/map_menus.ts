import type { RouteRecordRaw } from "vue-router"

function loadLocalRoutes() {

  // 1.获取菜单(userMenus代码写在位置)

  // 2.动态获取所有的路由对象
  // *放到数组路由对象都在独立的文件中
  // *从文件中将所有路由对象先读取数组
  const localRoute: RouteRecordRaw[] = []

  // 获取所有的ts文件
  const files = import.meta.glob('../router/main/**/*.ts', { eager: true })//拿到的是对象类型
  // console.log(files)
  for (const key in files) {
    const module = files[key]
    // console.log(module.default)
    localRoute.push(module.default)
  }
  return localRoute
}
export let firstMenu: any = null
export function mapMenuToRoute(userMenus: any[]) {

  const localRoute = loadLocalRoutes()
  // 3.根据菜单去匹配正确的路由router.addRoute('main', xxx)
  const routes: RouteRecordRaw[] = []

  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoute.find((item) => item.path === submenu.url)
      if (route) routes.push(route)

      // 记录第一个匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}

// 根据路径匹配需要显示的菜单
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path)
        return submenu
    }
  }
  return undefined
}
interface IBreadcrumbs {
  name: string
  path: string
}
// 面包屑
export function mapPathToBreadcrumb(path: string, userMenus: any[]) {
  // 定义面包屑
  const breadcrumb: IBreadcrumbs[] = []
  // 遍历获取面包屑层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadcrumb.push({ name: menu.name, path: menu.url })
        breadcrumb.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumb
}
