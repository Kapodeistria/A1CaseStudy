import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function BoardProblemSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Ausgangslage bei Sitzweich AG
          </Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ border: '1px solid rgba(15,23,42,0.08)', borderRadius: '14px', padding: '1rem' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Fertigung</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.6 }}>
                7 Werke, 40+ Sitzvarianten, 5 Mio. Checks/Monat – heute 60 Sek./Prüfung, subjektiv & fehleranfällig.
              </p>
            </div>
            <div style={{ border: '1px solid rgba(15,23,42,0.08)', borderRadius: '14px', padding: '1rem' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Kosten & Risiko</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.6 }}>
                €2.8 M Nacharbeit/Jahr · 12% Ausschuss · 25 FTE Prüfer – Fachkräfte schwer zu skalieren.
              </p>
            </div>
            <div style={{ border: '1px solid rgba(15,23,42,0.08)', borderRadius: '14px', padding: '1rem' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>Transformation</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.6 }}>
                Hybrid IT-Landschaft & Datensouveränitätsanforderungen – idealer Startpunkt für Lighthouse.
              </p>
            </div>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
