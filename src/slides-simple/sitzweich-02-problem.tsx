import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const problemCardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 242, 242, 0.92) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: '18px',
  padding: '2rem',
  boxShadow: '0 12px 40px rgba(230, 0, 0, 0.08), 0 0 0 1px rgba(230, 0, 0, 0.1)',
  borderTop: '3px solid #E60000',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
}

const metricCardStyle = {
  background: 'linear-gradient(135deg, rgba(230, 0, 0, 0.05) 0%, rgba(230, 0, 0, 0.02) 100%)',
  padding: '2rem 2.5rem',
  borderRadius: '16px',
  textAlign: 'center' as const,
  border: '1px solid rgba(230, 0, 0, 0.15)',
  boxShadow: '0 8px 24px rgba(230, 0, 0, 0.08)',
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative' as const,
  overflow: 'hidden' as const
}

export default function ProblemSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.8rem)"
            margin="0 0 2.5rem 0"
            style={{
              fontWeight: 300,
              color: '#0D0D0D',
              letterSpacing: '-0.03em',
              lineHeight: 1.2
            }}
          >
            Business Problem
          </Heading>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
        <div style={problemCardStyle}>
          <h3 style={{
            marginBottom: '1.5rem',
            fontWeight: 500,
            fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
            color: '#E60000',
            letterSpacing: '-0.02em'
          }}>
            Aktuelle Probleme
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#1F2937', lineHeight: 2, fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)' }}>
            <li>• Falten & Materialabweichungen schwer sichtbar</li>
            <li>• Subjektive Bewertung → keine Audit-Trails</li>
            <li>• 60 Sek./Prüfung → 27x zu langsam für Skalierung</li>
            <li>• 15-20% Fehlerquote bei Spitzenlast</li>
          </ul>
          <div style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(230, 0, 0, 0.12) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}/>
        </div>

        <div style={problemCardStyle}>
          <h3 style={{
            marginBottom: '1.5rem',
            fontWeight: 500,
            fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
            color: '#E60000',
            letterSpacing: '-0.02em'
          }}>
            Kosten & Impact
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#1F2937', lineHeight: 2, fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)' }}>
            <li><strong style={{ fontWeight: 600 }}>€2.8M</strong> Nacharbeitskosten/Jahr</li>
            <li><strong style={{ fontWeight: 600 }}>12%</strong> Ausschussquote · 30% Defekte vermeidbar</li>
            <li><strong style={{ fontWeight: 600 }}>25 FTE</strong> Qualitätsprüfer + Overtime</li>
            <li>Fehler stoppen Linie · 40% Output-Risiko</li>
          </ul>
          <div style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(230, 0, 0, 0.12) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}/>
        </div>
      </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
        <div style={metricCardStyle}>
          <h3 style={{
            fontSize: 'clamp(2.2rem, 3.2vw, 3rem)',
            color: '#E60000',
            fontWeight: 300,
            margin: 0,
            letterSpacing: '-0.04em',
            lineHeight: 1
          }}>
            €2.8M
          </h3>
          <p style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            color: '#6B7280',
            margin: '0.75rem 0 0 0',
            fontWeight: 500
          }}>
            Nacharbeitskosten
          </p>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #E60000, transparent)'
          }}/>
        </div>

        <div style={metricCardStyle}>
          <h3 style={{
            fontSize: 'clamp(2.2rem, 3.2vw, 3rem)',
            color: '#E60000',
            fontWeight: 300,
            margin: 0,
            letterSpacing: '-0.04em',
            lineHeight: 1
          }}>
            12%
          </h3>
          <p style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            color: '#6B7280',
            margin: '0.75rem 0 0 0',
            fontWeight: 500
          }}>
            Ausschussquote
          </p>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #E60000, transparent)'
          }}/>
        </div>

        <div style={metricCardStyle}>
          <h3 style={{
            fontSize: 'clamp(2.2rem, 3.2vw, 3rem)',
            color: '#E60000',
            fontWeight: 300,
            margin: 0,
            letterSpacing: '-0.04em',
            lineHeight: 1
          }}>
            25
          </h3>
          <p style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            color: '#6B7280',
            margin: '0.75rem 0 0 0',
            fontWeight: 500
          }}>
            FTE Prüfer
          </p>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #E60000, transparent)'
          }}/>
        </div>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
