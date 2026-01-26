import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "总收入",
    value: "¥45,231.89",
    description: "较上月增长 20.1%",
    icon: DollarSign,
  },
  {
    title: "用户数",
    value: "+2,350",
    description: "较上月增长 180.1%",
    icon: Users,
  },
  {
    title: "销售额",
    value: "+12,234",
    description: "较上月增长 19%",
    icon: ShoppingCart,
  },
  {
    title: "当前活跃",
    value: "+573",
    description: "较上小时增长 201",
    icon: TrendingUp,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
      
      {/* Placeholder for charts or recent activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>概览</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg m-6 mt-0">
            <span className="text-muted-foreground italic">图表占位符</span>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>近期销售</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg m-6 mt-0">
            <span className="text-muted-foreground italic">列表占位符</span>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
