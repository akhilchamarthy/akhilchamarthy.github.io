import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Heart } from 'lucide-react'

const NAV = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai',         label: 'AI & Data' },
  { href: '#projects',   label: 'Projects' },
  { href: '#blog',       label: 'Blog' },
]

const SOCIALS = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/akhil-chamarthy/',
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-400',
  },
  {
    icon: Github,
    href: 'https://github.com/akhilchamarthy',
    label: 'GitHub',
    hoverColor: 'hover:text-violet-400',
  },
  {
    icon: Mail,
    href: 'mailto:akhil.chamarthy@gmail.com',
    label: 'Email',
    hoverColor: 'hover:text-cyan-400',
  },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #030508 100%)' }}
    >
      {/* Top gradient divider */}
      <div className="divider mb-12" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <a href="#home" onClick={(e) => handleNav(e, '#home')}
              className="font-display font-bold text-2xl gradient-text block mb-3">
              Akhil Chamarthy
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI Engineer & Data Scientist building intelligent systems at the frontier of
              what's possible with machine learning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-xs font-semibold text-slate-300 tracking-[0.15em] uppercase mb-4">
              Navigation
            </h5>
            <ul className="space-y-2">
              {NAV.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="text-slate-500 hover:text-violet-300 transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-semibold text-slate-300 tracking-[0.15em] uppercase mb-4">
              Get In Touch
            </h5>
            <div className="flex gap-4 mb-5">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center
                    bg-slate-800/60 border border-slate-700/50 text-slate-400
                    ${s.hoverColor} hover:border-violet-500/40 transition-all duration-200`}
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
            <a href="/assets/resume.pdf" download
              className="btn-primary text-sm py-2.5 px-5 inline-flex">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Akhil Chamarthy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-violet-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
