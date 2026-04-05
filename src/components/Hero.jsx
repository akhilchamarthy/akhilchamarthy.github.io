import { motion } from 'framer-motion'
import { Download, Linkedin, ChevronDown } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'AI Engineer',
  'Data Scientist',
  'ML Engineer',
  'Full-Stack Developer',
]

const STATS = [
  { value: '5+',  label: 'Years Exp.' },
  { value: '15+', label: 'Projects' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* ── Aurora background ────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-orb w-[700px] h-[700px] bg-violet-600 animate-float-slow"
          style={{ top: '-180px', left: '-180px' }}
        />
        <div
          className="aurora-orb w-[550px] h-[550px] bg-cyan-500 animate-float-medium"
          style={{ bottom: '-100px', right: '-120px' }}
        />
        <div
          className="aurora-orb w-[420px] h-[420px] bg-fuchsia-600 animate-float-fast"
          style={{ top: '40%', left: '45%' }}
        />
      </div>

      {/* ── Dot grid overlay ─────────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* ── Content ──────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left — text (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Availability chip */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                Open to new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp}
              className="font-display font-bold leading-[1.08] text-5xl md:text-6xl lg:text-7xl text-slate-100 mb-1">
              Hi, I'm
            </motion.h1>
            <motion.h1 variants={fadeUp}
              className="font-display font-bold leading-[1.08] text-5xl md:text-6xl lg:text-7xl gradient-text mb-6">
              Akhil Chamarthy
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={fadeUp}
              className="flex items-center gap-2 text-xl md:text-2xl text-slate-300 mb-6 h-10">
              <span className="text-violet-400 font-light select-none">//</span>
              <span className="font-medium">{typed}</span>
              <span className="animate-cursor-blink text-violet-400 font-thin">|</span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeUp}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              I build data-driven products that solve real problems. From shipping
              full-stack applications to designing pipelines that power AI features
              at scale — I care about turning data into things people actually use.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="/assets/resume.pdf" download className="btn-primary">
                <Download size={17} />
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-chamarthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp}
              className="flex gap-8 mt-10 pt-8 border-t border-slate-800">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl gradient-text">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5 tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — photo (2 cols) */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-ring-wrap">
              <img
                src="/assets/profile_pic.JPG"
                alt="Akhil Chamarthy"
                className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-slate-600">scroll</span>
        <ChevronDown size={18} className="text-slate-600" />
      </motion.div>
    </section>
  )
}
