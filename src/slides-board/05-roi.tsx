import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function BoardROISlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Business Impact auf einen Blick
          </Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ border: '1px solid rgba(0,204,102,0.25)', borderRadius: '16px', padding: '1.2rem', background: '#ECFDF5' }}>
              <p style={{ margin: 0, fontSize: '2.2rem', fontWeight: 600, color: '#16A34A' }}>30×</p>
              <p style={{ margin: 0, color: '#14532D' }}>Cost-Out vs. manueller Inspektion</p>
            </div>
            <div style={{ border: '1px solid rgba(0,204,102,0.25)', borderRadius: '16px', padding: '1.2rem', background: '#ECFDF5' }}>
              <p style={{ margin: 0, fontSize: '2.2rem', fontWeight: 600, color: '#16A34A' }}>27×</p>
              <p style={{ margin: 0, color: '#14532D' }}>schnellere Prüfzeit (60s → 2.2s)</p>
            </div>
            <div style={{ border: '1px solid rgba(0,204,102,0.25)', borderRadius: '16px', padding: '1.2rem', background: '#ECFDF5' }}>
              <p style={{ margin: 0, fontSize: '2.2rem', fontWeight: 600, color: '#16A34A' }}>99 %</p>
              <p style={{ margin: 0, color: '#14532D' }}>Produktionsgenauigkeit bestätigt</p>
            </div>
            <div style={{ border: '1px solid rgba(0,204,102,0.25)', borderRadius: '16px', padding: '1.2rem', background: '#ECFDF5' }}>
              <p style={{ margin: 0, fontSize: '2.2rem', fontWeight: 600, color: '#16A34A' }}>1.6–3.0</p>
              <p style={{ margin: 0, color: '#14532D' }}>Monate Payback · ROI 291–639 % in Jahr 1</p>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#F1F5F9', color: '#0F172A' }}>
            Basisannahmen: 5 Produktionslinien, 5 Mio. Prüfungen/Jahr, Labor & Personalkosten &gt;€2.8 M, Hybrid-Betrieb Azure + Exoscale senkt OPEX zusätzlich um 17–32 %.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
