import React from 'react'

type Tone = 'red' | 'blue' | 'green' | 'yellow' | 'neutral'

const toneStyles: Record<Tone, React.CSSProperties> = {
  red: {
    border: '1px solid rgba(230, 0, 0, 0.25)',
    background: 'rgba(230, 0, 0, 0.05)',
    color: '#0F172A'
  },
  blue: {
    border: '1px solid rgba(0, 174, 239, 0.25)',
    background: 'rgba(0, 174, 239, 0.05)',
    color: '#0F172A'
  },
  green: {
    border: '1px solid rgba(0, 204, 102, 0.25)',
    background: 'rgba(0, 204, 102, 0.05)',
    color: '#0F172A'
  },
  yellow: {
    border: '1px solid rgba(255, 184, 28, 0.35)',
    background: 'rgba(255, 184, 28, 0.08)',
    color: '#0F172A'
  },
  neutral: {
    border: '1px solid rgba(15, 23, 42, 0.08)',
    background: '#FFFFFF',
    color: '#0F172A'
  }
}

interface InfoCardProps {
  title: string
  subtitle?: string
  tone?: Tone
  icon?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  align?: 'left' | 'center'
}

export default function InfoCard({
  title,
  subtitle,
  tone = 'neutral',
  icon,
  children,
  footer,
  align = 'left'
}: InfoCardProps) {
  const toneStyle = toneStyles[tone]

  return (
    <div
      style={{
        borderRadius: '16px',
        padding: '1.25rem',
        boxShadow: '0 18px 35px rgba(15, 23, 42, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        textAlign: align,
        ...toneStyle
      }}
    >
      <div style={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'space-between', gap: '0.5rem' }}>
        <div style={{ textAlign: align }}>
          <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
            {icon ? `${icon} ${title}` : title}
          </p>
          {subtitle && (
            <p style={{ margin: '0.2rem 0 0 0', color: '#4B5563', fontSize: '0.95rem' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {children && (
        <div style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
          {children}
        </div>
      )}

      {footer && (
        <div style={{ marginTop: 'auto', color: '#4B5563', fontSize: '0.9rem' }}>
          {footer}
        </div>
      )}
    </div>
  )
}
