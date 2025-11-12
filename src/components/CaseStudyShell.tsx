import React from 'react'

interface CaseStudyShellProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const baseStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  margin: '0 auto',
  padding: 'clamp(2rem, 3vw, 3rem)',
  borderRadius: '32px',
  background: '#FFFFFF',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  boxShadow: '0 30px 70px rgba(15, 23, 42, 0.12)',
  boxSizing: 'border-box' as const
}

export default function CaseStudyShell({ children, style }: CaseStudyShellProps) {
  return (
    <div style={{ ...baseStyle, ...style }}>
      {children}
    </div>
  )
}
