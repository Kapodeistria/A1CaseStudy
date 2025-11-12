import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const optionCardStyle = {
  background: '#FFFFFF',
  borderRadius: '18px',
  padding: '1.75rem',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
  border: '1px solid rgba(0, 174, 239, 0.2)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.75rem',
  minHeight: '260px'
}

const metricCardStyle = {
  background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.05) 0%, rgba(0, 174, 239, 0.02) 100%)',
  padding: '2rem 2.5rem',
  borderRadius: '16px',
  textAlign: 'center' as const,
  border: '1px solid rgba(0, 174, 239, 0.15)',
  boxShadow: '0 8px 24px rgba(0, 174, 239, 0.08)',
  position: 'relative' as const,
  overflow: 'hidden' as const
}

export default function SolutionSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.8rem)"
            margin="0 0 2rem 0"
            style={{
              fontWeight: 300,
              color: '#0D0D0D',
              letterSpacing: '-0.03em',
              lineHeight: 1.2
            }}
          >
            Lösungspfad · Von PoC zu Edge-Produktivbetrieb
          </Heading>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ ...optionCardStyle, borderTop: '3px solid #00AEEF' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#00AEEF', margin: 0 }}>OPTION 1 · 1-2 WOCHEN</p>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#0F172A' }}>GPT-4 Vision Rapid PoV</h3>
              <p style={{ margin: 0, color: '#4B5563', lineHeight: 1.6 }}>
                Azure AI Foundry Prompt-Flow "Detect Defects" vergleicht Referenz- mit Testbildern, liefert Erklärungen und benötigt keine Trainingsdaten.
              </p>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#1F2937', lineHeight: 1.7 }}>
                <li>$0.01–0.03 pro Bild</li>
                <li>Ideal für Executive Buy-in & Datenaufnahme</li>
              </ul>
            </div>

            <div style={{ ...optionCardStyle, borderTop: '3px solid #E60000' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#E60000', margin: 0 }}>OPTION 2 · 4-8 WOCHEN</p>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#0F172A' }}>Azure ML AutoML Produktion</h3>
              <p style={{ margin: 0, color: '#4B5563', lineHeight: 1.6 }}>
                Vision Transformers, YOLOv5/v8, Faster & Mask R-CNN inkl. Auto-Hyperparameter und Data Augmentation. Ziel: 97.8–99.4% Accuracy.
              </p>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#1F2937', lineHeight: 1.7 }}>
                <li>10-15 Bilder pro Label (50+ für Serie)</li>
                <li>MLOps & Model Registry out-of-the-box</li>
              </ul>
            </div>

            <div style={{ ...optionCardStyle, borderTop: '3px solid #00CC66' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#00CC66', margin: 0 }}>OPTION 3 · EDGE READY</p>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#0F172A' }}>Azure IoT Edge + ONNX Runtime</h3>
              <p style={{ margin: 0, color: '#4B5563', lineHeight: 1.6 }}>
                Containerisierte Inferenz auf Azure Stack Edge / IPCs mit sub-100ms Latenz, verwaltet durch Azure Arc & IoT Operations (OPC UA, MQTT, ONVIF).
              </p>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#1F2937', lineHeight: 1.7 }}>
                <li>Quantisierung 241MB → 8MB (2.6x schneller)</li>
                <li>Souveräne Verarbeitung direkt im Werk</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={metricCardStyle}>
              <h3 style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', color: '#00AEEF', fontWeight: 300, margin: 0, letterSpacing: '-0.04em' }}>
                2.2s
              </h3>
              <p style={{ fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', color: '#6B7280', margin: '0.75rem 0 0 0', fontWeight: 500 }}>
                Zykluszeit (27x schneller als manuell)
              </p>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)' }}/>
            </div>

            <div style={metricCardStyle}>
              <h3 style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', color: '#00AEEF', fontWeight: 300, margin: 0, letterSpacing: '-0.04em' }}>
                99%
              </h3>
              <p style={{ fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', color: '#6B7280', margin: '0.75rem 0 0 0', fontWeight: 500 }}>
                Produktionspräzision (Mask / Faster R-CNN)
              </p>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)' }}/>
            </div>

            <div style={metricCardStyle}>
              <h3 style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', color: '#00AEEF', fontWeight: 300, margin: 0, letterSpacing: '-0.04em' }}>
                24/7
              </h3>
              <p style={{ fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', color: '#6B7280', margin: '0.75rem 0 0 0', fontWeight: 500 }}>
                Edge-Inferenz + Cloud Retraining & Governance
              </p>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)' }}/>
            </div>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
