import { motion } from 'framer-motion'
import graduation from '../assets/photos/graduation.webp'

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="text-accent2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textmain">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-textmuted max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Who am I ?" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-textmain text-base sm:text-lg leading-relaxed"
          >
            <p>
              I&apos;m a final-year Master&apos;s student at the Faculty of
              Electrical Engineering and Informatics, Technical University of
              Košice (FEI TUKE).
            </p>
            <p>
              My passion lies in{' '}
              <span className="text-textmain font-semibold">frontend development</span>{' '}
              — I love turning ideas into clean, fast, and visually compelling
              web experiences. I work primarily with{' '}
              <span className="text-accent2 font-semibold">React</span> and
              I&apos;m always exploring new tools and design patterns.
            </p>
            <p>
              Beyond the screen, I&apos;m an avid traveler who has lived and
              worked across Europe and beyond — from{' '}
              <span className="text-textmain">Switzerland</span> to{' '}
              <span className="text-textmain">the Netherlands</span>,{' '}
              <span className="text-textmain">Belgium</span>,{' '}
              <span className="text-textmain">the UK</span> to{' '}
              <span className="text-textmain">Germany</span>. I believe
              exploring the world makes you a more creative and empathetic
              developer.
            </p>
            <p>
              I read self-development books regularly, and I fuel my curiosity
              with educational podcasts.
            </p>
            <p className="text-textmain font-medium">
              I&apos;m looking for a junior frontend role where I can grow fast
              and build things that matter.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surfaceMid aspect-[3/4]"
          >
            <img
              src={graduation}
              alt="TUKE Graduation"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm font-semibold text-white translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              TUKE Graduation
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
