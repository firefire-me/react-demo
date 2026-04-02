'use client'

import { useState, useCallback } from 'react'
import { RefreshCw, Star, Heart, Zap, Crown, Sparkles, Flame, Gem, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CardData {
  id: string
  frontIcon: React.ElementType
  frontColor: string
  backText: string
  isFlipped: boolean
}

const initialCards: CardData[] = [
  { id: '1', frontIcon: Star, frontColor: 'text-yellow-500', backText: '卡片 1', isFlipped: false },
  { id: '2', frontIcon: Heart, frontColor: 'text-red-500', backText: '卡片 2', isFlipped: false },
  { id: '3', frontIcon: Zap, frontColor: 'text-blue-500', backText: '卡片 3', isFlipped: false },
  { id: '4', frontIcon: Crown, frontColor: 'text-purple-500', backText: '卡片 4', isFlipped: false },
  { id: '5', frontIcon: Sparkles, frontColor: 'text-pink-500', backText: '卡片 5', isFlipped: false },
  { id: '6', frontIcon: Flame, frontColor: 'text-orange-500', backText: '卡片 6', isFlipped: false },
  { id: '7', frontIcon: Gem, frontColor: 'text-cyan-500', backText: '卡片 7', isFlipped: false },
  { id: '8', frontIcon: Trophy, frontColor: 'text-emerald-500', backText: '卡片 8', isFlipped: false },
  { id: '9', frontIcon: Star, frontColor: 'text-indigo-500', backText: '卡片 9', isFlipped: false },
]

export function CardGame() {
  const [cards, setCards] = useState<CardData[]>(initialCards)
  const [draggedCard, setDraggedCard] = useState<CardData | null>(null)

  const toggleFlip = useCallback((id: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    )
  }, [])

  const handleDragStart = (card: CardData) => {
    setDraggedCard(card)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetCard: CardData) => {
    if (!draggedCard || draggedCard.id === targetCard.id) return

    setCards((prev) => {
      const newCards = [...prev]
      const draggedIndex = newCards.findIndex((c) => c.id === draggedCard.id)
      const targetIndex = newCards.findIndex((c) => c.id === targetCard.id)

      const temp = newCards[draggedIndex]
      newCards[draggedIndex] = newCards[targetIndex]
      newCards[targetIndex] = temp

      return newCards
    })

    setDraggedCard(null)
  }

  const resetGame = () => {
    setCards(initialCards)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button onClick={resetGame} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          重置游戏
        </Button>
        <p className="text-sm text-muted-foreground">点击卡片翻转，拖拽卡片交换位置</p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {cards.map((card) => {
          const FrontIcon = card.frontIcon
          return (
            <div
              key={card.id}
              draggable
              onDragStart={() => handleDragStart(card)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(card)}
              className={cn(
                "cursor-grab active:cursor-grabbing",
                draggedCard?.id === card.id && "opacity-50"
              )}
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative w-full aspect-square"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
                onClick={() => toggleFlip(card.id)}
              >
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card className="w-full h-full flex items-center justify-center hover:shadow-lg transition-shadow">
                    <FrontIcon className={cn("h-12 w-12", card.frontColor)} />
                  </Card>
                </div>

                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <Card className="w-full h-full flex items-center justify-center bg-primary/10 hover:shadow-lg transition-shadow">
                    <span className="text-lg font-semibold text-primary">{card.backText}</span>
                  </Card>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
