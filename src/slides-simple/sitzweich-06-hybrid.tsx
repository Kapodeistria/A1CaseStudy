import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function HybridStrategySlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.5rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Hybrid Deployment & Financial Strategy
          </Heading>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: '18px',
              padding: '1.5rem',
              background: '#F9FAFB'
            }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', color: '#E60000', margin: 0 }}>STRATEGIE</p>
              <h3 style={{ margin: '0.3rem 0 1rem 0', fontSize: '1.4rem', color: '#0F172A' }}>Azure + A1/Exoscale</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7, color: '#1F2937', fontSize: '0.95rem' }}>
                <li>Azure: elastische GPU-Pools für Training & Bursting (bis 128 GPUs on-demand)</li>
                <li>Exoscale/A1: Dauerhafte Inferenz · 17-32% Kostenvorteil · EU-Datensouveränität</li>
                <li>Azure Arc verwaltet beides als einheitliche Ressourcen (Policy, Defender, Cost Mgmt)</li>
              </ul>
            </div>

            <div style={{
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: '18px',
              padding: '1.5rem'
            }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', color: '#00AEEF', margin: 0 }}>KOSTENMODELL</p>
              <h3 style={{ margin: '0.3rem 0 1rem 0', fontSize: '1.4rem', color: '#0F172A' }}>GPU TCO</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7, color: '#1F2937', fontSize: '0.95rem' }}>
                <li>A100 80GB Server: $20K Hardware + $11.4K Energie (5 Jahre) = $1,865/Monat</li>
                <li>Azure ND A100 v4: $27.20/h → $19.9K/Monat 24/7 (ohne Reserved Discounts)</li>
                <li>Cloud lohnt für Bursts · On-Prem/Exoscale ab 11-19 Monaten Nutzung günstiger</li>
              </ul>
            </div>

            <div style={{
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: '18px',
              padding: '1.5rem',
              background: '#FDF7ED'
            }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', color: '#FF9900', margin: 0 }}>NUTZEN</p>
              <h3 style={{ margin: '0.3rem 0 1rem 0', fontSize: '1.4rem', color: '#0F172A' }}>Hybrid Savings</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7, color: '#1F2937', fontSize: '0.95rem' }}>
                <li>Cloud-only Azure: ~$40K/Jahr (5 Mio. Inspektionen)</li>
                <li>Hybrid (Exoscale + Azure Bursts): ~$33K/Jahr (17% weniger)</li>
                <li>Optimiert mit Edge-Inferenz: ~$27K/Jahr (32% weniger + Compliance)</li>
              </ul>
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{ border: '1px solid rgba(15,23,42,0.08)', borderRadius: '12px', padding: '1rem', background: '#F9FAFB' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#0F172A' }}>Azure Cloud</p>
              <ul style={{ margin: '0.4rem 0 0 1rem', color: '#4B5563', lineHeight: 1.6 }}>
                <li>Elastische GPU-Pools (ND, NC Serien)</li>
                <li>Full-stack AI/ML Services & Copilot</li>
                <li>Ideal für Training & Bursting</li>
              </ul>
            </div>
            <div style={{ border: '1px solid rgba(15,23,42,0.08)', borderRadius: '12px', padding: '1rem', background: '#F9FAFB' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#0F172A' }}>A1 / Exoscale</p>
              <ul style={{ margin: '0.4rem 0 0 1rem', color: '#4B5563', lineHeight: 1.6 }}>
                <li>Dedizierte GPUs mit EU-Datensouveränität</li>
                <li>24/7 Edge-Inferenz, niedrige OPEX</li>
                <li>Azure Arc Management & Defender</li>
              </ul>
            </div>
          </div>

          <div style={{
            marginTop: '1.25rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '14px',
            border: '1px solid rgba(0, 204, 102, 0.35)',
            background: 'rgba(0, 204, 102, 0.08)',
            color: '#14532d',
            fontSize: '0.95rem',
            lineHeight: 1.7
          }}>
            Hybrid-Playbook: Grundlast auf Exoscale GPUs (Inference). Azure für Training + Peaks. Azure Arc + GitOps orchestrieren Deployments,
            wodurch Workloads verschiebbar bleiben und Transformation Offices klare Kosten-/Impact-KPIs erhalten.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
