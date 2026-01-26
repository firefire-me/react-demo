'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchUsers, User } from '@/lib/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ROLE_MAP: Record<string, string> = {
  'Admin': '管理员',
  'User': '普通用户',
  'Editor': '编辑',
}

const STATUS_MAP: Record<string, string> = {
  'Active': '活跃',
  'Inactive': '停用',
  'Pending': '待审核',
}

export function UserTable() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <div className="p-8 text-center">正在加载用户...</div>
  if (error) return <div className="p-8 text-center text-destructive">加载用户失败</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>用户列表</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>姓名</TableHead>
              <TableHead>邮箱</TableHead>
              <TableHead>角色</TableHead>
              <TableHead>状态</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell className="font-mono text-xs">{user.id}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{ROLE_MAP[user.role] || user.role}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      user.status === 'Active' ? 'default' : 
                      user.status === 'Pending' ? 'outline' : 'secondary'
                    }
                  >
                    {STATUS_MAP[user.status] || user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
