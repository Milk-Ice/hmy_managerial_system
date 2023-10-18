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


 
