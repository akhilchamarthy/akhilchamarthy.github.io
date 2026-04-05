import { motion } from 'framer-motion'

const SKILLS = [
  {
    category: 'AI & Machine Learning',
    color: 'purple',
    items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'Hugging Face', 'RAG', 'LoRA'],
  },
  {
    category: 'Data Engineering',
    color: 'cyan',
    items: ['Apache Spark', 'Apache Kafka', 'dbt', 'Airflow', 'Snowflake', 'Flink'],
  },
  {
    category: 'Languages',
    color: 'pink',
    items: ['Python', 'TypeScript', 'SQL', 'Rust', 'Go'],
  },
  {
    category: 'Web & Cloud',
    color: 'emerald',
    items: ['React', 'FastAPI', 'Node.js', 'AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
]

const badgeClass = {
  purple:  'badge',
  cyan:    'badge badge-cyan',
  pink:    'badge badge-pink',
  emerald: 'badge badge-emerald',
}

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label mb-4">About Me</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-8">
              Crafting Intelligence,<br />
              <span className="gradient-text">One Model at a Time</span>
            </h2>

            <div className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
              <p>
                I'm a software engineer with a deep, relentless passion for artificial
                intelligence and data systems. I spend my days — and many nights — exploring
                the frontiers of what's possible with modern AI: from fine-tuning large
                language models to architecting real-time data pipelines at scale.
              </p>
              <p>
                What drives me is the intersection of clean engineering and intelligent
                systems. I believe the most impactful AI products are built by engineers
                who understand both the math and the code. I've dedicated myself to being
                exactly that kind of engineer.
              </p>
              <p>
                When I'm not building, I'm learning. Whether it's a new transformer
                architecture, a distributed systems paper, or a clever optimization
                trick — curiosity is my default state.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/akhil-chamarthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm py-2.5 px-5"
              >
                Connect on LinkedIn
              </a>
              <a href="#projects" className="text-violet-400 hover:text-violet-300 transition-colors
                text-sm font-medium flex items-center gap-1 self-center">
                View my work →
              </a>
            </div>
          </motion.div>

          {/* Right — skill cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {SKILLS.map(group => (
              <motion.div
                key={group.category}
                variants={fadeUp(0)}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="glass-card glow-border rounded-2xl p-5"
              >
                <h4 className="text-xs font-semibold text-slate-300 tracking-wide mb-3 uppercase">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span key={skill} className={badgeClass[group.color]}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
