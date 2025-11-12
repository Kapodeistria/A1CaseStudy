import { Slide, Heading, Text, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function CaseStudyOverviewSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell style={{ textAlign: 'center' }}>
          <Heading
            fontSize="clamp(2.4rem, 3.4vw, 3rem)"
            margin="0 0 1rem 0"
            style={{ fontWeight: 500, color: '#0F172A' }}
          >
            Sitzweich AI Case Study · Technischer Deep Dive
          </Heading>
          <Text fontSize="1rem" style={{ color: '#4B5563', lineHeight: 1.8 }}>
            15 Slides · ~20 Minuten · Zielgruppe: CTO, CIO, Chief Architect, Heads of Manufacturing IT/OT, AI Leads.
            Struktur: Ausgangslage → Lösungspfad → Architektur → Risiken & Deployment → Compliance → Governance.
          </Text>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <div style={{ minWidth: '220px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Key Takeaways</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>
                99% Genauigkeit, 27× schneller, Hybrid Azure + A1/Exoscale, Payback &lt; 6 Monate
              </p>
            </div>
            <div style={{ minWidth: '220px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Ziel</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>
                Technische Freigabe, Architektur-Alignment, Start PoV Q1/2026
              </p>
            </div>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
