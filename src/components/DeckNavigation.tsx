import { useContext } from 'react'
import { DeckContext } from 'spectacle'
import NavigationOverlay from './NavigationOverlay'

interface DeckNavigationProps {
  deckLabel: string
}

export default function DeckNavigation({ deckLabel }: DeckNavigationProps) {
  const deckContext = useContext(DeckContext)

  if (!deckContext) return null

  const { activeView, slideCount, skipTo } = deckContext

  const handlePrev = () => {
    if (activeView.slideIndex > 0) {
      skipTo({ slideIndex: activeView.slideIndex - 1, stepIndex: 0 })
    }
  }

  const handleNext = () => {
    if (activeView.slideIndex < slideCount - 1) {
      skipTo({ slideIndex: activeView.slideIndex + 1, stepIndex: 0 })
    }
  }

  return (
    <NavigationOverlay
      currentSlide={activeView.slideIndex}
      totalSlides={slideCount}
      onPrevSlide={handlePrev}
      onNextSlide={handleNext}
      deckLabel={deckLabel}
    />
  )
}
