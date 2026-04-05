import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { projects } from '../data'

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest     = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">What I've Built</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Featured — large cards (1 per row on mobile, 3 on desktop) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 240, damping: 20 }}
              className="glass-card glow-border rounded-2xl p-6 flex flex-col"
            >
              {/* Featured tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <Star size={13} fill="currentColor" />
                  Featured
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-violet-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-300 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-slate-100 mb-3 leading-snug">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => <span key={t} className="badge text-[11px]">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest — compact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i + featured.length}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="glass-card rounded-2xl p-5 flex flex-col"
              style={{ border: '1px solid rgba(139,92,246,0.08)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-slate-200 text-base leading-snug pr-3">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-violet-300 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => <span key={t} className="badge text-[10px] px-2 py-0.5">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/akhilchamarthy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <Github size={17} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
