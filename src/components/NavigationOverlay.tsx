import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './NavigationOverlay.css'

interface NavigationOverlayProps {
  currentSlide: number
  totalSlides: number
  onPrevSlide: () => void
  onNextSlide: () => void
}

export default function NavigationOverlay({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide
}: NavigationOverlayProps) {
  const navigate = useNavigate()
  const [elapsedTime, setElapsedTime] = useState(0)

  // Timer effect - starts when component mounts
  useEffect(() => {
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      setElapsedTime(elapsed)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleHome = () => {
    navigate('/')
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Navigation Controls */}
      <div className="navigation">
        <button
          className="nav-button nav-prev"
          onClick={onPrevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="slide-counter">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Timer Display */}
        <div className="timer-display">
          ⏱ {formatTime(elapsedTime)}
        </div>

        <button
          className="nav-button nav-next"
          onClick={onNextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Home Button */}
      <button
        className="home-button"
        onClick={handleHome}
        aria-label="Back to home"
      >
        ⌂
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="slide-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}
