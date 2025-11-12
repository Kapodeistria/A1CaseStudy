import { Slide, Heading, Text } from 'spectacle'

const phases = [
  {
    title: 'PoV',
    timeframe: 'Q1–Q2 2026',
    focus: 'Pilotlinie & KPI-Messung',
    deliverable: 'Erkennungsrate 98%',
    color: '#00AEEF'
  },
  {
    title: 'Rollout',
    timeframe: 'Q3–Q4 2026',
    focus: '7 Werke · SD-WAN · SAP',
    deliverable: 'AI produktiv',
    color: '#00CC66'
  },
  {
    title: 'Optimize',
    timeframe: '2027',
    focus: 'Predictive Quality & Wartung',
    deliverable: 'A1 Managed Service',
    color: '#E60000'
  }
]

export default function ConclusionSlide() {
  return (
    <Slide backgroundColor="#F7F8FA">
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '3rem',
          borderRadius: '32px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 40px 90px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(148, 163, 184, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          position: 'relative' as const,
          overflow: 'hidden' as const
        }}
      >
        <Heading
          fontSize="clamp(2.5rem, 3.8vw, 3.5rem)"
          margin="0 0 0.75rem 0"
          style={{
            fontWeight: 300,
            color: '#0D0D0D',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            lineHeight: 1.1
          }}
        >
          Transformationspfad 2025–2027
        </Heading>
        <Text
          fontSize="clamp(1.2rem, 1.5vw, 1.4rem)"
          margin="0 0 3rem 0"
          style={{
            textAlign: 'center',
            color: '#6B7280',
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
        >
          Von Pilot zu Smart Factory – gemeinsam mit A1 Telekom Austria
        </Text>

        <div
          style={{
            position: 'relative',
            padding: '2.5rem 0',
            display: 'flex',
            gap: '1.75rem',
            flexWrap: 'wrap' as const
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 'calc(50% - 1.5px)',
              left: '5%',
              right: '5%',
              height: '3px',
              background: 'linear-gradient(90deg, rgba(0, 174, 239, 0.4), rgba(0, 204, 102, 0.4), rgba(230, 0, 0, 0.4))',
              borderRadius: '999px',
              zIndex: 0
            }}
          />

          {phases.map((phase) => (
            <div
              key={phase.title}
              style={{
                flex: '1 1 250px',
                minWidth: '220px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: `0 20px 50px rgba(15, 23, 42, 0.1), 0 0 0 1px ${phase.color}33`,
                border: `2px solid ${phase.color}33`,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden' as const
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: phase.color,
                  border: '4px solid rgba(255, 255, 255, 0.95)',
                  position: 'absolute',
                  top: '-10px',
                  left: 'calc(50% - 10px)',
                  boxShadow: `0 0 20px ${phase.color}66, 0 4px 12px rgba(0, 0, 0, 0.15)`
                }}
              />
              <p style={{
                margin: 0,
                fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                color: phase.color,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const
              }}>
                {phase.title}
              </p>
              <h3 style={{
                margin: '0.5rem 0',
                fontSize: 'clamp(1.3rem, 1.6vw, 1.5rem)',
                color: '#0D0D0D',
                fontWeight: 500,
                letterSpacing: '-0.02em'
              }}>
                {phase.timeframe}
              </h3>
              <p style={{
                margin: '0.5rem 0',
                fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                color: '#4B5563',
                lineHeight: 1.6
              }}>
                {phase.focus}
              </p>
              <p style={{
                margin: '0.5rem 0 0 0',
                fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                color: '#1F2937',
                fontWeight: 600
              }}>
                {phase.deliverable}
              </p>
              <div style={{
                position: 'absolute',
                bottom: -20,
                right: -20,
                width: '80px',
                height: '80px',
                background: `radial-gradient(circle, ${phase.color}15 0%, transparent 70%)`,
                pointerEvents: 'none'
              }} />
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '3rem',
            padding: '2.5rem 3rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.85) 100%)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            boxShadow: '0 15px 45px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(148, 163, 184, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            position: 'relative' as const,
            overflow: 'hidden' as const
          }}
        >
          <img
            src="/images/christos_kapodistrias_signature.png"
            alt="Signature"
            style={{
              height: '80px',
              opacity: 0.7,
              marginBottom: '1.5rem'
            }}
          />
          <Text
            fontSize="clamp(1.15rem, 1.4vw, 1.3rem)"
            style={{
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: '#374151',
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
          >
            „Mit A1 schaffen wir den Brückenschlag zwischen industrieller Exzellenz und souveräner KI-Innovation –
            von der Pilotlinie bis zum Managed Service."
          </Text>
          <div style={{ marginTop: '1.75rem' }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(1.05rem, 1.2vw, 1.15rem)',
              fontWeight: 600,
              color: '#1F2937',
              letterSpacing: '-0.01em'
            }}>
              Christos Kapodistrias
            </p>
            <p style={{
              margin: '0.5rem 0 0 0',
              fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
              color: '#6B7280',
              fontWeight: 400
            }}>
              Principal AI Solution Architect · A1 Telekom Austria
            </p>
          </div>
          <div style={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(230, 0, 0, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #E60000, #00AEEF, transparent)'
        }} />
      </div>
    </Slide>
  )
}
