import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { SectionTitle } from './About.jsx'

const projects = [
  {
    name: 'European Street Food Festival',
    description:
      'Redesign of the festival website: dark night-market look, animated stats and a live-filterable tour schedule.',
    tags: ['React', 'Vite', 'CSS'],
    num: '01',
    label: 'Redesign',
    url: '/streetfood',
  },
  {
    name: 'Zum schwarzen Bären',
    description:
      'Multilingual website for a boutique hotel and restaurant in Andermatt, with a reservation form and a Node.js backend.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Node.js'],
    num: '02',
    label: 'Hotel & Restaurant',
    url: '/baren',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Selected Work"
          title="My Work"
          subtitle="Projects I've built and things I'm working on."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group card-surface overflow-hidden hover:border-borderLight transition-all duration-200"
            >
              {/* Thumbnail placeholder */}
              <div className="relative aspect-[16/9] bg-surfaceMid border-b border-border overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="text-6xl font-black text-textmuted/30 select-none leading-none">{p.num}</span>
                  <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-textmuted/50 select-none">{p.label}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold tracking-tight text-textmain">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-textmuted leading-relaxed">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full border border-border text-textmuted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-borderLight text-textmain hover:bg-black/[0.04] transition-colors"
                  >
                    <FiExternalLink size={12} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
