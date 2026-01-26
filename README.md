# 现代化后台管理系统框架 (Admin Dashboard)

这是一个基于 Next.js 15+ 构建的企业级后台管理系统模板，采用了最新的 App Router (应用路由) 架构和现代化的前端技术栈。

## 技术栈 (Tech Stack)

- **框架 (Framework)**: Next.js 15+ (App Router)
- **语言 (Language)**: TypeScript (严格模式)
- **样式 (Styling)**: Tailwind CSS + Shadcn/UI (基于 Radix UI 的组件库)
- **状态管理 (State Management)**: Zustand (轻量级状态管理)
- **数据获取 (Data Fetching)**: TanStack Query v5 (强大的异步状态管理)
- **图标 (Icons)**: Lucide React (图标库)
- **表单处理 (Forms)**: React Hook Form + Zod (表单校验)

## 目录结构 (Directory Structure)

项目遵循基于功能 (Feature-based) 的目录组织方式：

- `/app`: 核心页面与路由
  - `/(dashboard)`: 登录后的受保护路由组，包含主布局
  - `/login`: 登录页面
- `/components`: 组件库
  - `/ui`: Shadcn 基础 UI 组件
  - `/layout`: 全局布局组件（如侧边栏、顶栏）
- `/lib`: 工具库与配置
  - `store.ts`: Zustand 状态仓库
  - `api.ts`: 模拟 API 请求与接口定义
  - `utils.ts`: 通用工具函数
- `/hooks`: 自定义 React 钩子
- `/public`: 静态资源文件

## 核心功能 (Core Features)

1. **响应式布局**: 
   - 桌面端支持可折叠侧边栏 (Sidebar)。
   - 移动端自动切换为抽屉式导航 (Drawer/Sheet)。
2. **仪表盘首页**: 包含统计卡片 (Stats Cards) 和网格布局。
3. **用户管理**: 
   - 使用 TanStack Query 模拟数据加载。
   - 封装了基础的表格组件 (UserTable) 展示用户信息。
4. **身份验证界面**: 
   - 包含完整的登录表单。
   - 使用 Zod 进行表单字段校验。

## 快速开始 (Getting Started)

### 安装依赖

使用 npm 安装必要的包：

```bash
npm install
```

### 运行开发服务器

启动本地开发环境：

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可查看项目。

## 编码规范 (Coding Guidelines)

- **组件类型**: 默认使用 Server Components (服务端组件)，仅在需要交互时使用 "use client" (客户端组件)。
- **类型安全**: 严禁使用 `any`，必须为所有数据和函数定义明确的 Interface (接口) 或 Type (类型)。
- **视觉体验**: 遵循现代审美，使用 Tailwind 的间距系统保持视觉统一。
