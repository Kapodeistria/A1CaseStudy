import React from 'react'
import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'PoV',
    timeframe: 'Q1–Q2 2026',
    bullets: ['Pilotlinie & KPI-Messung', 'Azure Vision Stack & Edge Deployment'],
    metric: 'Erkennungsrate 98 %'
  },
  {
    phase: 'Rollout',
    timeframe: 'Q3–Q4 2026',
    bullets: ['7 Werke · SD-WAN · SAP-Integration', 'Managed AI Ops & Lifecycle'],
    metric: 'AI produktiv an allen Standorten'
  },
  {
    phase: 'Optimize',
    timeframe: '2027',
    bullets: ['Predictive Quality & Wartung', 'A1 Managed Service & Continuous Training'],
    metric: 'Stabil 30 % weniger Nacharbeit'
  }
]

const cardVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.15,
      duration: 0.45,
      ease: [0, 0.71, 0.2, 1.01]
    }
  })
}

export default function TransformationPath() {
  return (
    <section className="w-full px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex flex-col gap-3 border-b border-gray-100 pb-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            A1 · Smart Factory Evolution
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Transformationspfad 2025–2027
          </h2>
          <p className="text-base text-gray-500">Von Pilot zu Smart Factory · Souveräne KI auf Azure</p>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-stretch">
          {phases.map((phase, index) => (
            <React.Fragment key={phase.phase}>
              <motion.div
                className="flex-1 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_65px_rgba(0,0,0,0.1)]"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    {phase.phase}
                  </span>
                  <span className="text-sm font-medium text-gray-700">{phase.timeframe}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {phase.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#E2001A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-gray-100 pt-4 text-sm font-semibold text-gray-900">
                  {phase.metric}
                </div>
              </motion.div>

              {index < phases.length - 1 && (
                <div className="hidden w-12 items-center justify-center md:flex">
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="relative h-1 w-full origin-left rounded-full bg-gradient-to-r from-[#E2001A] via-[#FF9900] to-[#00A878]"
                  >
                    <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-[#00A878]" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-5 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-gray-700">
            Governance · KPI Tracking · A1 Managed Operations
          </p>
          <p>Motion Sequencing: Fade + Slide · Responsive ab 900px</p>
        </div>
      </div>
    </section>
  )
}
