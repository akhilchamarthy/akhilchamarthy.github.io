import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai',         label: 'AI & Data' },
  { href: '#projects',   label: 'Projects' },
  { href: '#blog',       label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050810]/90 backdrop-blur-2xl border-b border-violet-500/10 shadow-lg shadow-black/20'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Spacer to keep layout balanced on mobile */}
        <div className="lg:w-auto w-6" />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}
                className="text-slate-400 hover:text-violet-300 transition-colors duration-200 text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/assets/resume.pdf"
          download
          className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
        >
          <Download size={15} />
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden text-slate-300 hover:text-violet-300 transition-colors p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0c0f1a]/98 backdrop-blur-2xl border-t border-violet-500/10 overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}
                  className="block py-3 text-slate-300 hover:text-violet-300 transition-colors font-medium border-b border-slate-800/60"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/assets/resume.pdf"
                download
                className="mt-4 btn-primary w-full justify-center text-sm"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
