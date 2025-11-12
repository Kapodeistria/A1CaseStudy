import { Slide, Heading, Text, FlexBox } from 'spectacle'

export default function TitleSlide() {
  return (
    <Slide backgroundColor="#0B0B0B">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ padding: '4rem' }}
      >
        <Heading
          fontSize="h1"
          color="primary"
          margin="0 0 2rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 900,
            textShadow: '0 0 40px rgba(230, 0, 0, 0.5)',
            lineHeight: 1.1
          }}
        >
          AI-Enabled Service Hub
        </Heading>

        <Text
          fontSize="h3"
          color="quinary"
          margin="0 0 3rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 400,
            opacity: 0.9
          }}
        >
          Digitale Transformation im öffentlichen Sektor
        </Text>

        <div style={{
          width: '120px',
          height: '4px',
          background: '#E60000',
          margin: '2rem auto 3rem'
        }} />

        <FlexBox
          flexDirection="column"
          alignItems="center"
          style={{
            marginTop: '3rem',
            padding: '2rem',
            borderTop: '2px solid rgba(230, 0, 0, 0.3)',
            width: '60%'
          }}
        >
          <Text
            fontSize="h3"
            color="primary"
            margin="0 0 1rem 0"
            style={{ fontWeight: 700 }}
          >
            A1 Telekom Austria
          </Text>

          <Text
            fontSize="text"
            color="quinary"
            margin="0.5rem 0"
            style={{ fontWeight: 400, opacity: 0.8 }}
          >
            Digitalisierungsstrategie & Azure Cloud Platform
          </Text>

          <Text
            fontSize="text"
            color="secondary"
            margin="1rem 0 0 0"
            style={{ fontWeight: 500 }}
          >
            Q1 2025
          </Text>
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}
