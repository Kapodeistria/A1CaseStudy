import { Slide, Heading, Text, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function BoardIntroSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell style={{ textAlign: 'center' }}>
          <Heading
            fontSize="clamp(2.4rem, 3.4vw, 3rem)"
            margin="0 0 1rem 0"
            style={{ fontWeight: 500, color: '#0F172A' }}
          >
            Board Brief · Wrinkle-Detection Lighthouse
          </Heading>
          <Text fontSize="1rem" style={{ color: '#4B5563', lineHeight: 1.8 }}>
            Ziel: Entscheidung zur Skalierung der KI-gestützten Qualitätskontrolle bei Sitzweich AG.
            Fokus: Business Impact, Investitionsbedarf, Zeitplan, Governance.
          </Text>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <div style={{ minWidth: '200px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Zielgruppe</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>CEO, COO, CFO, CIO, Transformation Office</p>
            </div>
            <div style={{ minWidth: '200px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Dauer</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>~8 Minuten · 8 Slides</p>
            </div>
            <div style={{ minWidth: '200px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Entscheidung</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>Budget + Governance für PoV ab Q1/2026</p>
            </div>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
