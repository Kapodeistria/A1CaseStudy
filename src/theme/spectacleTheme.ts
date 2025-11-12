/**
 * Spectacle Theme Configuration
 * A1 Telekom Austria - Public Sector AI Service Hub
 */

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
  space: ['0', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '6rem'],
  size: {
    width: 1920,
    height: 1080,
    maxCodePaneHeight: 600,
  },
}

// Deck template should return JSX, not a style object
// Background styles are handled by CSS in app.css
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
