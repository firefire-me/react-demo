import { CardGame } from "./components/card-game"

export default function GamePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">卡片游戏</h2>
      </div>
      <CardGame />
    </div>
  )
}
