import React from 'react'
import { Heading, FlexBox } from 'spectacle'

interface SectionProps {
  title: string
  subtitle?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'
  icon?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  color = 'primary',
  icon
}) => {
  return (
    <FlexBox
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{
        background: `radial-gradient(circle at center, rgba(${
          color === 'primary' ? '230, 0, 0' :
          color === 'secondary' ? '0, 174, 239' :
          color === 'tertiary' ? '255, 184, 28' :
          color === 'quaternary' ? '0, 204, 102' :
          '255, 255, 255'
        }, 0.12) 0%, transparent 65%)`,
        padding: '3rem'
      }}
    >
      {icon && (
        <div
          style={{
            fontSize: '5rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}
        >
          {icon}
        </div>
      )}

      <Heading
        fontSize="5xl"
        color={color}
        margin="0"
        style={{
          textAlign: 'center',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textShadow: `0 0 30px rgba(${
            color === 'primary' ? '230, 0, 0, 0.4' :
            color === 'secondary' ? '0, 174, 239, 0.4' :
            color === 'tertiary' ? '255, 184, 28, 0.4' :
            color === 'quaternary' ? '0, 204, 102, 0.4' :
            '255, 255, 255, 0.4'
          })`
        }}
      >
        {title}
      </Heading>

      {subtitle && (
        <Heading
          fontSize="2xl"
          color="quinary"
          margin="2rem 0 0 0"
          style={{
            textAlign: 'center',
            fontWeight: 400,
            opacity: 0.85
          }}
        >
          {subtitle}
        </Heading>
      )}
    </FlexBox>
  )
}

export default Section
