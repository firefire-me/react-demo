# 构建现代化 Next.js 后台管理系统计划

我将根据您的需求，从零开始构建一个基于 Next.js 15+、Tailwind CSS、Shadcn/UI 和 Zustand 的现代化后台管理系统。

## 1. 项目初始化与环境搭建
- **初始化 Next.js 项目**: 使用 `create-next-app` 创建项目（TypeScript, Tailwind, ESLint, App Router）。
- **安装依赖**:
  - UI/Icons: `lucide-react`, `clsx`, `tailwind-merge`
  - 状态管理: `zustand`
  - 数据请求: `@tanstack/react-query`
  - 表单验证: `react-hook-form`, `zod`, `@hookform/resolvers`
  - 表格核心: `@tanstack/react-table` (用于构建高质量 DataTable)
- **初始化 Shadcn/UI**: 配置 `components.json` 并安装基础组件（Button, Card, Table, Sheet, Input, DropdownMenu 等）。

## 2. 目录结构与核心配置
- **创建目录结构**: 严格按照 `Feature-based` 结构创建 `/app/(dashboard)`, `/app/login`, `/components`, `/lib`, `/hooks` 等目录。
- **配置工具库**: 实现 `lib/utils.ts` (cn helper) 和 `lib/store.ts` (Zustand Sidebar store)。
- **配置 Providers**: 创建 `QueryProvider` 封装 TanStack Query Client。

## 3. 全局布局实现 (Global Layout)
- **Sidebar 组件**:
  - 桌面端: 可折叠侧边栏，状态由 Zustand 管理。
  - 移动端: 使用 Shadcn `Sheet` 组件实现抽屉式导航。
  - 菜单项配置: 使用 Lucide 图标。
- **Header 组件**: 包含移动端菜单触发器和面包屑/标题占位。
- **主布局**: 在 `app/(dashboard)/layout.tsx` 中整合 Sidebar 和 Header。

## 4. 功能模块开发
- **Dashboard 首页 (`/`)**:
  - 使用 Grid 布局展示 3-4 个统计卡片 (Stats Cards)。
  - 展示 Mock 数据 (如总用户数、活跃度等)。
- **用户管理模块 (`/users`)**:
  - **UserTable 组件**:
    - 基于 `@tanstack/react-table` 和 Shadcn `Table` 组件封装。
    - 定义 TypeScript 接口 (`User`).
    - 使用 `useQuery` 模拟异步数据获取。
  - **页面集成**: 在 `/users/page.tsx` 中使用 `UserTable`。
- **登录页 (`/login`)**: 创建基础静态页面以完善路由结构。

## 5. 代码质量与优化
- 确保所有组件使用 TypeScript 严格类型。
- 遵循 "use client" vs Server Components 最佳实践。
- 统一 UI 风格（间距、字体、圆角）。

准备好后，请确认此计划，我将开始执行。