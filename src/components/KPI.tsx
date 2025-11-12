import React from 'react'
import { FlexBox, Heading, Text } from 'spectacle'

interface KPIProps {
  value: string | number
  label: string
  sublabel?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'
  icon?: string
  trend?: 'up' | 'down' | 'neutral'
  size?: 'small' | 'medium' | 'large'
}

export const KPI: React.FC<KPIProps> = ({
  value,
  label,
  sublabel,
  color = 'primary',
  icon,
  trend,
  size = 'medium'
}) => {
  const fontSize = size === 'small' ? '3xl' : size === 'large' ? '6xl' : '5xl'
  const padding = size === 'small' ? '1.5rem' : size === 'large' ? '3rem' : '2rem'

  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'
  const trendColor = trend === 'up' ? '#00CC66' : trend === 'down' ? '#E60000' : '#FFB81C'

  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        background: 'var(--bg-card)',
        border: `2px solid var(${color === 'primary' ? '--brand-primary' : color === 'secondary' ? '--accent-1' : '--gray-700'})`,
        borderRadius: 'var(--border-radius-lg)',
        padding,
        minWidth: '280px',
        boxShadow: 'var(--shadow-lg)',
        transition: 'all var(--transition-base)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="kpi-card"
    >
      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, transparent, var(${
            color === 'primary' ? '--brand-primary' :
            color === 'secondary' ? '--accent-1' :
            color === 'tertiary' ? '--accent-2' :
            '--gray-600'
          }), transparent)`,
          opacity: 0.6
        }}
      />

      {icon && (
        <div
          style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            opacity: 0.8
          }}
        >
          {icon}
        </div>
      )}

      <FlexBox alignItems="baseline" style={{ gap: '0.5rem' }}>
        <Heading
          fontSize={fontSize}
          color={color}
          margin="0"
          style={{
            fontWeight: 900,
            lineHeight: 1
          }}
        >
          {value}
        </Heading>

        {trend && (
          <span
            style={{
              fontSize: '2rem',
              color: trendColor,
              fontWeight: 700
            }}
          >
            {trendIcon}
          </span>
        )}
      </FlexBox>

      <Text
        fontSize="lg"
        color="quinary"
        margin="0.75rem 0 0 0"
        style={{
          fontWeight: 600,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        {label}
      </Text>

      {sublabel && (
        <Text
          fontSize="sm"
          color="secondary"
          margin="0.5rem 0 0 0"
          style={{
            fontWeight: 400,
            textAlign: 'center',
            opacity: 0.75
          }}
        >
          {sublabel}
        </Text>
      )}
    </FlexBox>
  )
}

// Grid container for multiple KPIs
export const KPIGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FlexBox
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="stretch"
      style={{
        gap: '2rem',
        padding: '2rem',
        width: '100%'
      }}
    >
      {children}
    </FlexBox>
  )
}

export default KPI
