/**
 * Spectacle Theme Configuration
 * A1 Telekom Austria - Public Sector AI Service Hub
 */

import DeckNavigation from '../components/DeckNavigation'

export const spectacleTheme = {
  colors: {
    primary: 'var(--brand-primary)',
    secondary: 'var(--accent-1)',
    tertiary: 'var(--accent-2)',
    quaternary: 'var(--accent-3)',
    quinary: 'var(--text-inverse)',
    background: 'var(--gradient-page)',
    surface: 'var(--bg-surface)',
    muted: 'var(--text-muted)',
  },
  fonts: {
    header: 'var(--font-family-sans)',
    text: 'var(--font-family-sans)',
    monospace: 'var(--font-family-mono)',
  },
  fontSizes: {
    h1: 'var(--font-size-7xl)',
    h2: 'var(--font-size-5xl)',
    h3: 'var(--font-size-4xl)',
    text: 'var(--font-size-2xl)',
    monospace: 'var(--font-size-xl)',
    caption: 'var(--font-size-sm)',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: '1.2',
    snug: '1.35',
    relaxed: '1.6',
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96],
  size: {
    width: 1920,
    height: 1080,
    maxCodePaneHeight: 600,
  },
}

export const createDeckTemplate = (deckLabel: string) => {
  return function DeckTemplate() {
    return (
      <div style={{ pointerEvents: 'auto' }}>
        <DeckNavigation deckLabel={deckLabel} />
      </div>
    )
  }
}

export const deckTemplate = () => null

export const slideTransition = {
  from: {
    transform: 'translate3d(0, 40px, 0) scale(0.96)',
    opacity: 0,
  },
  enter: {
    transform: 'translate3d(0, 0, 0) scale(1)',
    opacity: 1,
  },
  leave: {
    transform: 'translate3d(0, -40px, 0) scale(0.96)',
    opacity: 0,
  },
}

export default spectacleTheme
