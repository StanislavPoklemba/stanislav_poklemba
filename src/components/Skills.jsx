import { motion } from 'framer-motion'
import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt,
  FaPython, FaGitAlt, FaNetworkWired,
} from 'react-icons/fa'
import { SiNextdotjs, SiFastapi, SiMysql } from 'react-icons/si'
import { TbApi, TbDeviceMobile } from 'react-icons/tb'
import { MdOutlineSyncAlt, MdVerified } from 'react-icons/md'
import { SectionTitle } from './About.jsx'

const groups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <FaJsSquare /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Responsive Design', icon: <TbDeviceMobile /> },
      { name: 'REST API Integration', icon: <TbApi /> },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Agile / Scrum', icon: <MdOutlineSyncAlt /> },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Slovak — Native' },
      { name: 'English — B2' },
      { name: 'German — A2' },
    ],
  },
]

function Badge({ skill, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-borderLight bg-bg text-sm text-textmuted hover:border-black/25 hover:text-textmain transition-all"
    >
      {skill.icon && <span className="text-accent2 text-base">{skill.icon}</span>}
      <span>{skill.name}</span>
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="My Toolkit"
          title="Skills & Technologies"
          subtitle="The stack I work with day-to-day and the tools I'm growing into."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
              className="card-elevated p-6 sm:p-7 hover:border-borderLight transition-colors"
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-textmuted mb-5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, i) => (
                  <Badge key={s.name} skill={s} delay={i * 0.04} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cisco CCNP certification card — monochrome */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 card-elevated p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-borderLight transition-colors"
        >
          <div className="grid place-items-center w-14 h-14 rounded-xl border border-border bg-bg shrink-0">
            <FaNetworkWired size={24} className="text-textmain" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-textmuted">
                Certification
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-textmuted">
                <MdVerified className="text-textmain" /> Verified
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-textmain">
              Cisco CCNP Enterprise — Advanced Routing
            </h4>
            <p className="mt-1 text-textmuted text-sm sm:text-base">
              Advanced networking expertise in enterprise routing, BGP, OSPF, and infrastructure design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
