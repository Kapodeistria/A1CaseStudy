import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function BoardOpportunitySlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Warum jetzt? Markt- & Wettbewerbsdruck
          </Heading>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#1F2937', lineHeight: 1.8, fontSize: '1rem' }}>
            <li>McKinsey: Early AI Adopters steigern Cashflow um 122% vs. 10% bei Nachzüglern (5-7 Jahre).</li>
            <li>Lighthouse Hersteller sichern sich 3-5 Jahre Vorsprung – Qualitätsprüfung ist häufig der 1. Use Case.</li>
            <li>Azure AI liefert 99% Genauigkeit & 30× Cost-Out für Automotive Seats – Referenzprojekte bei BMW/Mercedes.</li>
          </ul>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#F9FAFB' }}>
            <strong style={{ color: '#E60000' }}>Strategischer Fit:</strong> Wrinkle Detection schafft schnelle, sichtbare Wirkung und
            bereitet Technologie & Organisation auf weitere Vision-, Robotics- und Agentic-AI-Use Cases vor.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
