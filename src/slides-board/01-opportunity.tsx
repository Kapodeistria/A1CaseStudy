import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'
import InfoCard from '../components/InfoCard'

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <InfoCard title="Cashflow-Hebel" tone="red">
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6 }}>
                <li>Early Adopters: +122 % Cashflow (McKinsey)</li>
                <li>Nachzügler: nur +10 % nach 5–7 Jahren</li>
              </ul>
            </InfoCard>
            <InfoCard title="Wettbewerb" tone="neutral">
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6 }}>
                <li>Lighthouse-Werke sichern 3–5 Jahre Vorsprung</li>
                <li>Qualitätsprüfung ist häufig das erste skalierte KI-Use Case</li>
              </ul>
            </InfoCard>
            <InfoCard title="Best Practices" tone="blue">
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6 }}>
                <li>99 % Genauigkeit · 30× Kostensenkung (BMW/Mercedes Referenzen)</li>
                <li>Azure AI Vision + Sovereign Cloud validiert in Serie</li>
              </ul>
            </InfoCard>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#F9FAFB' }}>
            <strong style={{ color: '#E60000' }}>Strategischer Fit:</strong> Wrinkle Detection liefert schnelle Wirkung, finanziert weitere
            Smart-Factory-Initiativen und baut Skills/Architektur für Vision-, Robotics- und Agentic-AI-Use Cases auf.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
