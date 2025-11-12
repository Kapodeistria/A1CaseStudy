import { Slide, Heading } from 'spectacle'

const locationCardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
  backdropFilter: 'blur(8px)',
  borderRadius: '14px',
  padding: '1.25rem',
  boxShadow: '0 8px 24px rgba(0, 174, 239, 0.1), 0 0 0 1px rgba(0, 174, 239, 0.2)',
  border: '2px solid rgba(0, 174, 239, 0.2)',
  flex: 1,
  minWidth: '160px',
  textAlign: 'center' as const,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative' as const,
  overflow: 'hidden' as const
}

const hubCardStyle = {
  background: 'linear-gradient(135deg, #E60000 0%, #C40000 100%)',
  backdropFilter: 'blur(12px)',
  borderRadius: '18px',
  padding: '2rem',
  boxShadow: '0 16px 48px rgba(230, 0, 0, 0.25), 0 0 0 3px rgba(255, 255, 255, 0.4)',
  color: '#fff',
  textAlign: 'center' as const,
  border: '3px solid rgba(255, 255, 255, 0.2)',
  position: 'relative' as const,
  overflow: 'hidden' as const
}

const featureBadgeStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  borderRadius: '999px',
  background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, rgba(0, 174, 239, 0.08) 100%)',
  color: '#00AEEF',
  fontWeight: 600,
  fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
  marginRight: '0.75rem',
  marginTop: '0.75rem',
  border: '1px solid rgba(0, 174, 239, 0.2)',
  boxShadow: '0 2px 8px rgba(0, 174, 239, 0.08)'
}

export default function NetworkSlide() {
  return (
    <Slide backgroundColor="#F7F8FA">
      <Heading
        fontSize="clamp(2rem, 3vw, 2.8rem)"
        margin="0 0 3rem 0"
        style={{
          fontWeight: 300,
          color: '#0D0D0D',
          letterSpacing: '-0.03em',
          lineHeight: 1.2
        }}
      >
        Netzwerkarchitektur als AI-Enabler
      </Heading>

      {/* SD-WAN Hub */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div style={hubCardStyle}>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 1.5vw, 1.4rem)',
            margin: '0 0 0.75rem 0',
            fontWeight: 600,
            letterSpacing: '-0.02em'
          }}>
            🔴 Austria HQ (Wien)
          </h3>
          <p style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: 0,
            opacity: 0.95,
            fontWeight: 400
          }}>
            SD-WAN Hub • A1 Austria East Region • Azure Stack HCI
          </p>
          <div style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}/>
        </div>

        {/* Connection Lines Visual */}
        <div style={{
          width: '3px',
          height: '50px',
          background: 'linear-gradient(180deg, rgba(230, 0, 0, 0.8) 0%, rgba(0, 174, 239, 0.3) 100%)',
          margin: '1rem 0',
          borderRadius: '999px'
        }} />
      </div>

      {/* 7 Spoke Locations */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇦🇹</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#E60000',
            letterSpacing: '-0.01em'
          }}>
            Produktionswerk 1
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            Österreich
          </p>
        </div>

        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇦🇹</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#E60000',
            letterSpacing: '-0.01em'
          }}>
            Produktionswerk 2
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            Österreich
          </p>
        </div>

        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇭🇺</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#00AEEF',
            letterSpacing: '-0.01em'
          }}>
            Ungarn
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            Local Breakout
          </p>
        </div>

        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇸🇰</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#00AEEF',
            letterSpacing: '-0.01em'
          }}>
            Slowakei
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            Local Breakout
          </p>
        </div>

        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇷🇴</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#00AEEF',
            letterSpacing: '-0.01em'
          }}>
            Rumänien
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            Local Breakout
          </p>
        </div>

        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇩🇪</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#00AEEF',
            letterSpacing: '-0.01em'
          }}>
            Deutschland
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            Local Breakout
          </p>
        </div>

        <div style={locationCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇺🇸</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#00AEEF',
            letterSpacing: '-0.01em'
          }}>
            Washington
          </h4>
          <p style={{ fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)', color: '#6B7280', margin: 0 }}>
            USA
          </p>
        </div>

        <div style={{
          ...locationCardStyle,
          border: '2px solid rgba(0, 204, 102, 0.4)',
          background: 'linear-gradient(135deg, rgba(240, 253, 244, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
          boxShadow: '0 8px 24px rgba(0, 204, 102, 0.15), 0 0 0 1px rgba(0, 204, 102, 0.25)'
        }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🇨🇿</div>
          <h4 style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            margin: '0 0 0.3rem 0',
            fontWeight: 600,
            color: '#00CC66',
            letterSpacing: '-0.01em'
          }}>
            Tschechien NEU
          </h4>
          <p style={{
            fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)',
            color: '#00CC66',
            margin: 0,
            fontWeight: 600
          }}>
            IoT/AI Werk
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 8px 28px rgba(0, 174, 239, 0.08), 0 0 0 1px rgba(0, 174, 239, 0.15)',
        borderTop: '3px solid #00AEEF',
        position: 'relative' as const,
        overflow: 'hidden' as const
      }}>
        <h4 style={{
          fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
          margin: '0 0 1.25rem 0',
          fontWeight: 600,
          color: '#0D0D0D',
          letterSpacing: '-0.01em'
        }}>
          SD-WAN Features & Konnektivität
        </h4>
        <div>
          <span style={featureBadgeStyle}>Local Internet Breakouts</span>
          <span style={featureBadgeStyle}>5G/LTE Backup</span>
          <span style={featureBadgeStyle}>QoS für IoT/AI Traffic</span>
          <span style={featureBadgeStyle}>Zero Trust Network Access</span>
          <span style={featureBadgeStyle}>OPC UA Gateway Integration</span>
          <span style={featureBadgeStyle}>Azure ExpressRoute (HQ)</span>
        </div>
        <div style={{
          position: 'absolute',
          bottom: -20,
          right: -20,
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(0, 174, 239, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}/>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.85) 0%, rgba(236, 253, 245, 0.8) 100%)',
        backdropFilter: 'blur(8px)',
        borderRadius: '14px',
        border: '2px solid rgba(0, 174, 239, 0.25)',
        textAlign: 'center' as const,
        boxShadow: '0 8px 20px rgba(0, 174, 239, 0.08)',
        position: 'relative' as const,
        overflow: 'hidden' as const
      }}>
        <p style={{
          fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
          color: '#0369a1',
          margin: 0,
          fontWeight: 500,
          lineHeight: 1.6
        }}>
          <strong style={{ fontWeight: 600 }}>A1 Business Advantage:</strong> Latenzoptimierung für AI Inferencing über Austria East Region + hybrides Multi-Cloud Management
        </p>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)'
        }}/>
      </div>
    </Slide>
  )
}
