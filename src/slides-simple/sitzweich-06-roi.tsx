import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const roiCardStyle = {
  background: 'linear-gradient(135deg, rgba(240, 253, 244, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
  backdropFilter: 'blur(12px)',
  borderRadius: '18px',
  padding: '2rem',
  boxShadow: '0 12px 40px rgba(0, 204, 102, 0.1), 0 0 0 1px rgba(0, 204, 102, 0.15)',
  border: '2px solid rgba(0, 204, 102, 0.2)',
  borderTop: '3px solid #00CC66',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
}

export default function ROISlide() {
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
            Total Cost of Ownership (5 Jahre)
          </Heading>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
        <div style={roiCardStyle}>
          <h3 style={{
            color: '#00CC66',
            marginBottom: '1.5rem',
            fontWeight: 500,
            fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
            letterSpacing: '-0.02em'
          }}>
            Investment
          </h3>
          <div style={{
            fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
            lineHeight: 2.2,
            color: '#1F2937'
          }}>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong style={{ fontWeight: 600 }}>Gesamt:</strong> €600-800K
            </p>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong style={{ fontWeight: 600 }}>Azure Stack HCI / Edge:</strong> €180K
            </p>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong style={{ fontWeight: 600 }}>KI-Lösung & Integration:</strong> €250K
            </p>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong style={{ fontWeight: 600 }}>Vision Hardware & Optik:</strong> €120K
            </p>
            <hr style={{
              margin: '1.25rem 0',
              border: 'none',
              borderTop: '2px solid rgba(0, 204, 102, 0.15)'
            }}/>
            <p style={{
              fontSize: 'clamp(1.2rem, 1.5vw, 1.4rem)',
              fontWeight: 500,
              color: '#00CC66',
              margin: 0
            }}>
              5-Jahres TCO: ~€1.5M (inkl. Energie & Betrieb)
            </p>
          </div>
          <div style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(0, 204, 102, 0.12) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}/>
        </div>

        <div style={roiCardStyle}>
          <h3 style={{
            color: '#00CC66',
            marginBottom: '1.5rem',
            fontWeight: 500,
            fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
            letterSpacing: '-0.02em'
          }}>
            Einsparungen (p.a.)
          </h3>
          <div style={{
            fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
            lineHeight: 2.2,
            color: '#1F2937'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span>Nacharbeit -65%</span>
              <strong style={{ color: '#E60000', fontWeight: 600 }}>€1.82M</strong>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span>Ausschuss -30%</span>
              <strong style={{ color: '#E60000', fontWeight: 600 }}>€420K</strong>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span>FTE Reduktion (2-5 Prüfer)</span>
              <strong style={{ color: '#E60000', fontWeight: 600 }}>€100-500K</strong>
            </div>
            <hr style={{
              margin: '1.25rem 0',
              border: 'none',
              borderTop: '2px solid rgba(0, 204, 102, 0.15)'
            }}/>
            <p style={{
              fontSize: 'clamp(1.2rem, 1.5vw, 1.4rem)',
              fontWeight: 500,
              color: '#00CC66',
              margin: 0
            }}>
              Gesamt: €2.2M+ / Jahr
            </p>
          </div>
          <div style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(0, 204, 102, 0.12) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}/>
        </div>
      </div>

          <div style={{
            marginTop: '2.5rem',
            padding: '2rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(220, 252, 231, 0.6) 0%, rgba(236, 253, 245, 0.5) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            textAlign: 'center' as const,
            border: '1px solid rgba(0, 204, 102, 0.2)',
            boxShadow: '0 12px 32px rgba(0, 204, 102, 0.08)',
            position: 'relative' as const,
            overflow: 'hidden' as const
          }}>
            <p style={{
              fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
              color: '#166534',
              margin: 0,
              fontWeight: 500
            }}>
              <strong style={{ fontSize: 'clamp(1.3rem, 1.5vw, 1.45rem)', fontWeight: 600, color: '#00CC66' }}>
                ROI 291–639% (Jahr 1)
              </strong>{' '}
              · Payback 1.6–3.0 Monate · Break-even &lt;24 Monate
            </p>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #00CC66, transparent)'
            }}/>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
