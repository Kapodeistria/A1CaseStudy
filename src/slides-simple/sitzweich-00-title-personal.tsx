import { Slide, Heading, Text, FlexBox } from 'spectacle'

export default function TitleSlidePersonal() {
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
          margin="0 0 1rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 300,
            color: '#000',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}
        >
          Christos Kapodistrias
        </Heading>

        <div style={{
          width: '80px',
          height: '2px',
          background: '#E60000',
          margin: '1.5rem 0'
        }} />

        <Text
          fontSize="1.8rem"
          margin="0 0 1rem 0"
          style={{
            textAlign: 'center',
            fontWeight: 300,
            color: '#333'
          }}
        >
          Self-Presentation
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
          Professional Experience & Value Proposition
        </Text>

        <div style={{ fontSize: '1.1rem', color: '#999', lineHeight: 1.8, textAlign: 'center' }}>
          <p><strong style={{ color: '#000' }}>Principal AI Cloud Solution Architect</strong></p>
          <p style={{ marginTop: '0.5rem' }}>A1 Telekom Austria Assessment</p>
          <p style={{ marginTop: '0.5rem', color: '#00AEEF', fontWeight: 500 }}>Q4 2025 · 12.11.2025</p>
        </div>
      </FlexBox>
    </Slide>
  )
}
