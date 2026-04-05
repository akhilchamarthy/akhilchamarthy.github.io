import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experience } from '../data'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const typeColors = {
  'Full-time':  { text: 'text-emerald-400',  bg: 'bg-emerald-500/10', border: 'border-emerald-500/25' },
  'Internship': { text: 'text-amber-400',    bg: 'bg-amber-500/10',   border: 'border-amber-500/25'   },
  'Contract':   { text: 'text-cyan-400',     bg: 'bg-cyan-500/10',    border: 'border-cyan-500/25'    },
  'Program':    { text: 'text-violet-400',   bg: 'bg-violet-500/10',  border: 'border-violet-500/25'  },
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 relative"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #070c18 50%, #050810 100%)' }}
    >
      {/* Faint grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Career</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(139,92,246,0.6) 15%, rgba(6,182,212,0.5) 50%, rgba(139,92,246,0.4) 85%, transparent)',
            }}
          />

          <motion.div
            className="space-y-10"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {experience.map((exp, i) => {
              const tc = typeColors[exp.type] ?? typeColors['Full-time']
              return (
                <motion.div key={i} variants={fadeUp} className="relative pl-12">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-6 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(139,92,246,0.18)', border: '1.5px solid rgba(139,92,246,0.5)' }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="glass-card glow-border rounded-2xl p-6"
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="font-display font-bold text-xl text-slate-100 leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-violet-400 font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <span
                        className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full border ${tc.text} ${tc.bg} ${tc.border}`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-5 mt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-violet-500 mt-[5px] shrink-0 text-[10px]">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => <span key={t} className="badge">{t}</span>)}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
