import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // 1.获取菜单(userMenus代码写在位置)

  // 2.动态获取所有的路由对象
  // *放到数组路由对象都在独立的文件中
  // *从文件中将所有路由对象先读取数组
  const localRoute: RouteRecordRaw[] = []

  // 获取所有的ts文件
  const files = import.meta.glob('../router/main/**/*.ts', { eager: true }) //拿到的是对象类型
  // console.log(files)
  for (const key in files) {
    const module: any = files[key]
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
      if (route) {
        // 给route顶层菜单添加重定向功能
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        // 将二级菜单对应的路径加进去
        routes.push(route)
      }

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
      if (submenu.url === path) return submenu
    }
  }
  return undefined
}
interface IBreadcrumbs {
  name: string
  path: string
}

/**
 * 根据路径生成面包屑导航
 * @param path 当前路由路径
 * @param userMenus 用户菜单数据
 * @returns 包含面包屑信息的数组
 */
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

/**
 * 将嵌套的菜单列表映射为包含所有菜单项的 ID 数组。
 *
 * @param {any[]} menuList - 嵌套的菜单列表
 * @returns {number[]} - 包含所有菜单项的 ID 数组
 */
export function mapMenuListToIds(menuList: any[]): number[] {
  const ids: number[] = []

  /**
   * 递归遍历菜单列表并将每个叶子菜单项的 ID 添加到 ids 数组中。
   *
   * @param {any[]} menu - 当前的菜单列表
   */
  function recurseGetId(menu: any[]) {
    for (const item of menu) {
      if (item.children) {
        // 继续递归处理子菜单
        recurseGetId(item.children)
      } else {
        // 添加叶子菜单项的 ID 到数组
        ids.push(item.id)
      }
    }
  }

  // 调用递归函数以开始遍历初始菜单列表
  recurseGetId(menuList)
  // console.log(ids)
  // 返回包含所有菜单项的 ID 数组
  return ids
}

/**
 * 从菜单映射到按钮的权限
 *@param menuList 菜单的列表
 @returns 权限的数据
 */
export function mapMenuListToPermisson(menuList: any[]) {
  const permission: string[] = []

  function recurseGetPermission(menu: any) {
    for (const item of menu) {
      if (item.type === 3) {
        permission.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)
  return permission
}
