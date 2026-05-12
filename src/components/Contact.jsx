import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { SiGmail, SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { SectionTitle } from './About.jsx'

const links = [
  {
    icon: SiGmail,
    color: '#EA4335',
    label: 'Email',
    value: 'stanopoklemba@gmail.com',
    href: 'mailto:stanopoklemba@gmail.com',
  },
  {
    icon: FaLinkedin,
    color: '#0A66C2',
    label: 'LinkedIn',
    value: 'in/stanislav-poklemba',
    href: 'https://www.linkedin.com/in/stanislav-poklemba/',
  },
  {
    icon: SiGithub,
    color: '#181717',
    label: 'GitHub',
    value: 'StanislavPoklemba',
    href: 'https://github.com/StanislavPoklemba',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle eyebrow="Let's Connect" title="Get In Touch" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-textmain text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          I&apos;m currently open to{' '}
          <span className="text-textmain font-semibold">junior frontend opportunities</span>.
          Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {links.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('https') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group card-surface border-borderLight p-7 flex flex-col items-center gap-3 hover:border-black/20 transition-all duration-200"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl border border-borderLight bg-surfaceMid group-hover:border-black/20 group-hover:bg-surface transition-all">
                  <Icon size={22} style={{ color: l.color }} />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-textmuted">
                  {l.label}
                </div>
                <div className="text-sm text-textmain font-medium break-all">{l.value}</div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12"
        >
          <a
            href="mailto:stanopoklemba@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-textmain text-bg font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <FiMail size={15} /> Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}
