import { UserTable } from "./components/user-table"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      </div>
      <UserTable />
    </div>
  )
}
