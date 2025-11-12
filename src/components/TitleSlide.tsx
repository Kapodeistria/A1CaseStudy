import React from 'react'
import { Heading, Text, FlexBox } from 'spectacle'

interface TitleSlideProps {
  title: string
  subtitle?: string
  author?: string
  date?: string
  org?: string
}

export const TitleSlide: React.FC<TitleSlideProps> = ({
  title,
  subtitle,
  author,
  date,
  org = 'A1 Telekom Austria'
}) => {
  return (
    <FlexBox
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{
        background: 'radial-gradient(circle at center, rgba(230, 0, 0, 0.15) 0%, transparent 70%)',
        padding: '4rem'
      }}
    >
      <Heading
        fontSize="6xl"
        color="primary"
        margin="0 0 2rem 0"
        style={{
          textAlign: 'center',
          fontWeight: 900,
          textShadow: '0 0 40px rgba(230, 0, 0, 0.5)',
          lineHeight: 1.1
        }}
      >
        {title}
      </Heading>

      {subtitle && (
        <Text
          fontSize="2xl"
          color="quinary"
          margin="0 0 3rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 400,
            maxWidth: '80%'
          }}
        >
          {subtitle}
        </Text>
      )}

      <FlexBox
        flexDirection="column"
        alignItems="center"
        style={{
          marginTop: '4rem',
          padding: '2rem',
          borderTop: '2px solid var(--brand-primary)',
          width: '60%'
        }}
      >
        {org && (
          <Text
            fontSize="xl"
            color="primary"
            margin="0 0 1rem 0"
            style={{ fontWeight: 700 }}
          >
            {org}
          </Text>
        )}

        {author && (
          <Text
            fontSize="lg"
            color="quinary"
            margin="0.25rem 0"
            style={{ fontWeight: 400 }}
          >
            {author}
          </Text>
        )}

        {date && (
          <Text
            fontSize="base"
            color="tertiary"
            margin="0.5rem 0 0 0"
            style={{ fontWeight: 500 }}
          >
            {date}
          </Text>
        )}
      </FlexBox>
    </FlexBox>
  )
}

export default TitleSlide
