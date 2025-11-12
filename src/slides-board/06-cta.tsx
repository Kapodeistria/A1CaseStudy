import { Slide, Heading, FlexBox, Text } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'
import InfoCard from '../components/InfoCard'

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <InfoCard title="Heute beschließen" tone="red" align="center">
              Budget, Governance Setup, Sponsor & Product Owner
            </InfoCard>
            <InfoCard title="Q1 2026" tone="blue" align="center">
              PoV Kick-off · KPI Read-out · Invest-Check
            </InfoCard>
            <InfoCard title="Q2–Q4 2026" tone="green" align="center">
              Rollout & Skalierung auf alle Werke
            </InfoCard>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'left', color: '#4B5563' }}>
            <p style={{ margin: '0 0 0.4rem 0', fontWeight: 600 }}>Entscheidungen heute benötigt:</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.8 }}>
              <li>Investitionsfreigabe €600–800K (inkl. Hybrid-Infrastruktur & Betrieb)</li>
              <li>Transformation Sponsor + Product Owner Quality nominieren</li>
              <li>Startschuss PoV mit A1 Delivery Team im Januar 2026</li>
            </ul>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
