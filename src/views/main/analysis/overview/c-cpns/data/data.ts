export interface User {
  stack: string
  desc: string
}
export const tableData: User[] = [
  {
    stack: '开发工具',
    desc: '使用 Visual Studio Code 作为的主要开发工具，提供了丰富的插件生态系统，加速了开发过程。'
  },
  {
    stack: '编程语言',
    desc: '采用 TypeScript 4.x 和 JavaScript 作为主要编程语言，为项目提供了类型安全性和更好的可维护性。'
  },
  {
    stack: '构建工具',
    desc: '使用 Vite来构建和打包的前端应用,以提高性能和开发效率。'
  },
  {
    stack: '前端框架',
    desc: '选择了 Vue 3.x 与 Composition API(setup)来构建的前端应用，提供了更灵活的组件组织和响应式开发体验。'
  },
  {
    stack: '路由工具',
    desc: 'Vue Router 4.x 用于处理前端路由，支持单页应用的导航和路由控制。'
  },
  {
    stack: '状态管理',
    desc: '使用Pinia 来管理前端应用的状态，确保应用的数据一致性和可维护性。'
  },
  {
    stack: 'UI 框架',
    desc: '选择了 Element Plus 作为的 UI 框架，提供了一套丰富的可定制化组件，使用户界面更加美观和易用。'
  },
  {
    stack: '可视化',
    desc: '使用 Echart 5.x 来实现数据可视化，为用户提供清晰的数据展示和交互。'
  },
  {
    stack: '工具库',
    desc: '项目中集成了 @vueuse/core、dayjs、countup.js 等工具库，以提供更多的实用功能和工具。'
  },
  {
    stack: 'lSS 预编译',
    desc: 'Less 作为 CSS 预编译语言，以提供更好的样式组织和可维护性。'
  },
  {
    stack: 'HTTP 工具',
    desc: 'Axios 用于处理前端应用与后端服务器之间的数据通信，支持异步请求和数据交互。'
  },
  {
    stack: 'Git Hook 工具',
    desc: '使用 husky 来管理 Git 钩子，以确保代码提交前的质量控制和规范。'
  },
  {
    stack: '代码规范',
    desc: '采用 EditorConfig、Prettier 和 ESLint 来维持代码风格的一致性，提高代码质量。'
  },
  {
    stack: '提交规范',
    desc: '使用 Commitizen 和 Commitlint 来规范化代码提交消息，使提交历史更加清晰和可理解。'
  },
  {
    stack: '自动部署',
    desc: '项目自动部署到 Centos 服务器，使用 Jenkins 进行自动化构建和部署,Nginx 作为反向代理服务器，以确保应用的持续交付和可用性。'
  }
]
export default tableData
