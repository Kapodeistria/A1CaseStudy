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
        <Heading
          fontSize="4rem"
          margin="0 0 0.5rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 300,
            color: '#000',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}
        >
          KI-gestützte Qualitätskontrolle
        </Heading>

        <div style={{
          width: '80px',
          height: '2px',
          background: '#E60000',
          margin: '1.5rem 0'
        }} />

        <Text
          fontSize="1.8rem"
          margin="0 0 2rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 300,
            color: '#333'
          }}
        >
          Smart Factory Lösung für Sitzweich AG
        </Text>

        <Text
          fontSize="1.3rem"
          margin="0 0 3rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 300,
            color: '#666'
          }}
        >
          Hybrid AI Architecture auf Azure mit souveräner Daten-Infrastruktur
        </Text>

        <div style={{ fontSize: '1.1rem', color: '#999', lineHeight: 1.8 }}>
          <p><strong style={{ color: '#000' }}>A1 Telekom Austria</strong></p>
          <p style={{ marginTop: '0.5rem' }}>AI & Cloud Solutions · Azure Gold Partner</p>
          <p style={{ marginTop: '0.5rem', color: '#00AEEF', fontWeight: 500 }}>Q1 2025</p>
        </div>
      </FlexBox>
    </Slide>
  )
}
