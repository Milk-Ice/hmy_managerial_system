# 一、Vue3+TS项目架构-代码规范-集成第三库

## (一) 项目的介绍

### 1. 后台管理系统的定位和核心

后台管理系统的定位在于提供一个功能强大的工具，用于管理数据、用户、权限等关键后端功能。其核心职责包括数据管理、权限控制和数据可视化。

### 2. 后台管理系统项目功能介绍

用户管理、数据展示、权限控制、数据导出等，旨在为用户提供全面的后台管理功能。

### 3. 创建项目-npm init vue@latest

项目创建阶段，采用npm命令来初始化项目，使用了最新版本的Vue。

### 4. 目录结构

### 5. 1.5. tsconfig文件的作用和解析

## (二) 项目代码规范

### 1.  editorconfig文件

editorconfig文件，定义项目中代码编辑器的配置，如缩进和换行符。

### 2. prettier配置

Prettier的配置。自动调整代码风格，以确保一致性。

### 3. eslint配置

检测和修复潜在的代码问题

## (三) 项目内容搭建

### 1.  目录结构的创建

- node_modules
- public
- src

- - assets
  - base-ui
  - components
  - router
  - service
  - store
  - utils
  - views

- - - App.vue

- - main.ts

- .env
- .env.development
- .env.production
- .eslintrc.cjs
- .gitignore
- .prettierrc.json
- auto-imports.d.ts
- components.d.ts

### 2. css样式的重置

### 3. vue-router路由

### 4. pinia状态管理

### 5. axios网络请求

### 6. 区分开发和生产环境


 

# 二、Plus集成-登录模块

## (一) 一. Element-Plus集成

### 1. 全局引入

### 2. 按需引入

- vite插件配置

### 3. 图标的引入

### 4. ElMessage引入

## (二) 搭建登录页面

### 1.  背景的搭建

- 100vw/vh

### 2. 登录界面Panel

#### 一、 整体界面的搭建

- 标题
- tabs
- 记住密码/忘记链接(组件)
- 立即登录(组件)

#### 二、 tabs搭建过程

- label的插槽使用
- 内容显示

#### 三、账号登录form

- ElForm/ElFormItem/ElInput
- 绑定属性

#### 四、form的校验规则

#### 五、点击立即登录

- 父组件发生点击, 执行子组件的函数.
- defineExpose()
- const accountRef = ref<InstanceType<typeof PaneAccount>>()

### 3. 登录的操作

#### 一、 form通过验证

- formRef.validate(回调)

#### 二、登录接口的调用

- post
- data: {name, password}

#### 三、将登录操作store中

#### 四、IAccount类型的定义

### 4. postman的使用

### 5. token缓存和cache封装


 

# 三、登录路由守卫-获取登录信息-菜单树-注册路由

## (一) 登录页面的功能

### 1.  导航守卫

```vue
router.beforeEach((to) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
})
```

### 2.  记住密码功能

### 3. main权限管理

- RBAC: role based access control

- - 基于角色访问控制(权限管理)

- 后台数据库设计表(了解)

### 4.  请求用户信息

- 用户的角色

### 5. 根据角色id获取菜单信息

### 6. userInfo/userMenus进行本地缓存

## (二) 首页的界面搭建

### 1. 整体的布局ElContainer

### 2. 侧边栏的菜单Menu

#### 一、 分析ElMenu每一个组件的作用

#### 二、手动的搭建整个菜单结构

#### 三、根据userMenus动态遍历

#### 四、 图标动态: 动态组件

### 3. Main的头部Header展示

#### 一、menu-icon的图标点击

- 点击切换自己的图标
- 切换aside的宽度(动画)
- 切换menu的折叠效果

#### 二、个人信息的展示

- 退出登录
- 样式的调整

### 4. 注册所有的路由, 页面跳转

- 动态的菜单进行权限管理
- 但是所有的路由都是被注册进去


 
