import { Slide, Heading, Text, FlexBox } from 'spectacle'

export default function TitleSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ padding: '4rem' }}
      >
        {/* Main Title */}
        <Heading
          fontSize="h1"
          margin="0 0 2rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 900,
            color: '#E60000', // A1 Red
            lineHeight: 1.1
          }}
        >
          AI-Enabled Service Hub
        </Heading>

        {/* Subtitle */}
        <Text
          fontSize="h3"
          margin="0 0 3rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 400,
            color: '#5f6368' // Grau
          }}
        >
          Digitale Transformation im öffentlichen Sektor mit souveräner Daten-Infrastruktur
        </Text>

        {/* Red Divider Line */}
        <div style={{
          width: '120px',
          height: '4px',
          background: '#E60000',
          margin: '2rem auto 3rem'
        }} />

        {/* Footer Info */}
        <FlexBox
          flexDirection="column"
          alignItems="center"
          style={{
            marginTop: '2rem',
            padding: '2rem',
            borderTop: '2px solid rgba(230, 0, 0, 0.2)',
            width: '60%'
          }}
        >
          <Text
            fontSize="h3"
            margin="0 0 1rem 0"
            style={{
              fontWeight: 700,
              color: '#E60000'
            }}
          >
            A1 Telekom Austria
          </Text>

          <Text
            fontSize="text"
            margin="0.5rem 0"
            style={{
              fontWeight: 400,
              color: '#5f6368'
            }}
          >
            Digitalisierungsstrategie & Azure Cloud Platform
          </Text>

          <Text
            fontSize="text"
            margin="1rem 0 0 0"
            style={{
              fontWeight: 500,
              color: '#00AEEF' // Azure Blue Accent
            }}
          >
            Q1 2025
          </Text>
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}
