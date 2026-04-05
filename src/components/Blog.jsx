import { motion } from 'framer-motion'
import { Clock, Tag, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data'

const TAG_COLORS = {
  'AI':               'badge',
  'RAG':              'badge badge-cyan',
  'LLMs':             'badge',
  'Fine-Tuning':      'badge badge-pink',
  'PyTorch':          'badge badge-pink',
  'Data Engineering': 'badge badge-emerald',
  'MLOps':            'badge badge-emerald',
  'Architecture':     'badge badge-cyan',
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-32 relative"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #060b14 50%, #050810 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Writing</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            I write about AI engineering, data systems, and the craft of building
            intelligent products. No fluff — just hard-won lessons from production.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22 }}
              className="glass-card glow-border rounded-2xl p-6 flex flex-col cursor-pointer group"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className={TAG_COLORS[tag] ?? 'badge'}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-slate-100 text-lg leading-snug mb-3
                group-hover:text-violet-300 transition-colors duration-200">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} /> {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
                <span className="flex items-center gap-1 text-violet-400 font-medium
                  group-hover:gap-2 transition-all duration-200">
                  Read <ArrowRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.p
          className="text-center text-slate-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          More posts on the way — subscribe to never miss one.
        </motion.p>
      </div>
    </section>
  )
}
