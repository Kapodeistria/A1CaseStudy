import { Slide, Heading, FlexBox, Text } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function BoardCTASlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell style={{ textAlign: 'center' }}>
          <Heading
            fontSize="clamp(2.2rem, 3.2vw, 3rem)"
            margin="0 0 1rem 0"
            style={{ fontWeight: 500, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Entscheidung: Wrinkle Detection als Lighthouse freigeben
          </Heading>
          <Text fontSize="1.05rem" style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Wir schlagen vor, Q1 2026 mit einem PoV zu starten und bis Ende 2026 alle Werke zu skalieren. A1 übernimmt Architektur, Umsetzung
            und Transformation Office – Sitzweich stellt Produktowner, Datenzugang und Change Champions.
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <div style={{ minWidth: '200px', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(230,0,0,0.2)' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Heute beschließen</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563' }}>Budget & Governance Setup</p>
            </div>
            <div style={{ minWidth: '200px', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(0,174,239,0.2)' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#00AEEF' }}>Q1 2026</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563' }}>PoV + KPI Read-out</p>
            </div>
            <div style={{ minWidth: '200px', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(0,204,102,0.2)' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#00CC66' }}>Q2-Q4 2026</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563' }}>Rollout + Skalierung</p>
            </div>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
