# 中文化改造计划 (Localization Plan)

我将把所有用户可见的界面文本从英文翻译为中文，以适应中国用户群体。

## 1. 仪表盘首页 (Dashboard Home)
- **文件**: `app/(dashboard)/page.tsx`
- **修改内容**:
  - `Total Revenue` -> `总收入`
  - `Users` -> `用户数`
  - `Sales` -> `销售额`
  - `Active Now` -> `当前活跃`
  - 统计描述 (e.g., `+20.1% from last month`) -> `较上月增长 20.1%`
  - `Overview` -> `概览`
  - `Recent Sales` -> `近期销售`
  - 占位符文本 -> `图表占位符`, `列表占位符`

## 2. 侧边栏与导航 (Sidebar & Navigation)
- **文件**: `components/layout/sidebar.tsx`
- **修改内容**:
  - `Dashboard` -> `仪表盘`
  - `Users` -> `用户管理`
  - `Settings` -> `设置`
  - `Logout` -> `退出登录`
  - `Admin` -> `管理后台`

## 3. 顶部栏 (Header)
- **文件**: `components/layout/header.tsx`
- **修改内容**:
  - `Dashboard` -> `仪表盘`
  - `User profile` -> `用户资料`

## 4. 用户管理页面 (User Management)
- **文件**: `app/(dashboard)/users/page.tsx` & `app/(dashboard)/users/components/user-table.tsx`
- **修改内容**:
  - 页面标题 `Users` -> `用户列表`
  - 表头:
    - `ID` -> `ID` (保留)
    - `Name` -> `姓名`
    - `Email` -> `邮箱`
    - `Role` -> `角色`
    - `Status` -> `状态`
  - 加载/错误状态:
    - `Loading users...` -> `正在加载用户...`
    - `Error loading users` -> `加载用户失败`
  - 徽章/状态值 (通过映射显示中文):
    - `Active` -> `活跃`
    - `Inactive` -> `停用`
    - `Pending` -> `待审核`
  - 角色值 (通过映射显示中文):
    - `Admin` -> `管理员`
    - `User` -> `普通用户`
    - `Editor` -> `编辑`

## 5. 登录页面 (Login Page)
- **文件**: `app/login/page.tsx`
- **修改内容**:
  - `Sign in` -> `登录`
  - `Enter your email...` -> `请输入您的邮箱和密码以访问您的账户`
  - `Email` -> `邮箱`
  - `Password` -> `密码`
  - 按钮 `Sign in` / `Signing in...` -> `登录` / `登录中...`
  - 底部链接 `Don't have an account?` -> `没有账号？请联系管理员`
  - 错误提示:
    - `Invalid email address` -> `邮箱格式不正确`
    - `Password must be at least 6 characters` -> `密码至少包含 6 个字符`

## 6. 全局配置 (Global Config)
- **文件**: `app/layout.tsx`
- **修改内容**:
  - Metadata `title` -> `后台管理系统`
  - Metadata `description` -> `基于 Next.js 构建的现代化后台管理系统`
  - `<html lang="en">` -> `<html lang="zh-CN">`

## 7. 模拟数据 (Mock Data)
- **文件**: `lib/api.ts`
- **修改内容**:
  - 保持 `role` 和 `status` 的**数据值**为英文（通常后端 API 返回枚举 key），但在前端展示时进行映射转换，或者直接修改 Mock 数据返回中文（为了演示方便，我将直接修改 Mock 数据的返回值为中文，或者在前端组件中添加映射逻辑。考虑到真实场景，我将在前端组件中添加映射逻辑，保持 API 数据结构更接近真实后端）。

准备好后，请确认此计划，我将开始执行。