export interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive' | 'Pending'
}

export async function fetchUsers(): Promise<User[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  return [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Pending' },
    { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Editor', status: 'Active' },
  ]
}
