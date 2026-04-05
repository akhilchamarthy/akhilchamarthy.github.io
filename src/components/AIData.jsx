import { motion } from 'framer-motion'
import {
  Brain, Database, Cpu, Network, BarChart3, ShieldCheck,
} from 'lucide-react'
import { aiCapabilities } from '../data'

const ICONS = [Brain, Database, Cpu, Network, BarChart3, ShieldCheck]

const colorMap = {
  purple:  { icon: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', glow: 'rgba(139,92,246,0.2)' },
  cyan:    { icon: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   glow: 'rgba(6,182,212,0.2)' },
  pink:    { icon: 'text-pink-400',   bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   glow: 'rgba(244,114,182,0.2)' },
  emerald: { icon: 'text-emerald-400',bg: 'bg-emerald-500/10',border: 'border-emerald-500/20',glow: 'rgba(52,211,153,0.2)' },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AIData() {
  return (
    <section
      id="ai"
      className="relative py-36 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #060b18 0%, #0a0619 35%, #060b18 70%, #04080f 100%)',
      }}
    >
      {/* Big decorative "AI" text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-black text-[28vw] leading-none"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(6,182,212,0.04) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AI
        </span>
      </div>

      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-orb w-[500px] h-[500px] bg-violet-700 animate-float-slow"
          style={{ opacity: 0.08, top: '-80px', right: '-100px' }}
        />
        <div
          className="aurora-orb w-[400px] h-[400px] bg-cyan-600 animate-float-medium"
          style={{ opacity: 0.07, bottom: '-60px', left: '-80px' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Passion & Expertise</p>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-6">
            Deeply Wired for{' '}
            <span className="gradient-text">AI & Data</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            AI isn't just a tool I use — it's the lens through which I see every engineering
            problem. From the mathematical elegance of attention mechanisms to the operational
            complexity of production ML, I live and breathe this space.
          </p>
        </motion.div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {aiCapabilities.map((cap, i) => {
            const Icon = ICONS[i]
            const c = colorMap[cap.color] ?? colorMap.purple
            return (
              <motion.div
                key={cap.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="glass-card rounded-2xl p-6 cursor-default"
                style={{
                  border: `1px solid ${c.border.replace('border-', '')}`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${c.bg} border ${c.border}`}
                >
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="font-display font-semibold text-slate-100 mb-2">{cap.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* "Currently exploring" banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.22)',
          }}
        >
          <p className="text-sm font-semibold text-violet-300 mb-1 tracking-wide uppercase">
            Currently Exploring
          </p>
          <p className="text-slate-300 text-base">
            Multimodal AI · AI Agent Frameworks (AutoGen, CrewAI) · Test-Time Compute ·
            Diffusion Model Fine-Tuning · Speculative Decoding
          </p>
        </motion.div>
      </div>
    </section>
  )
}
