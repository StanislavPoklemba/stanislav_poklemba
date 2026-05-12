import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import heroPhoto from '../assets/photos/CV_photo.webp'

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 px-5 sm:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(100,116,139,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6"
        >
          <div
            className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden"
            style={{
              boxShadow: '0 0 0 3px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.09)',
              transform: 'translateZ(0)',
            }}
          >
            <img
              src={heroPhoto}
              alt="Stanislav Poklemba"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
              loading="eager"
              draggable={false}
            />
          </div>
        </motion.div>

        <div className="w-full rounded-3xl bg-surfaceAlt border border-border shadow-[0_1px_3px_rgba(0,0,0,0.05)] px-8 sm:px-14 py-10 flex flex-col items-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-textmuted text-base sm:text-lg tracking-wide mb-2"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight gradient-text leading-[1.05]"
          >
            Stanislav Poklemba
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 text-xl sm:text-2xl font-medium text-accent2 tracking-wide"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-6 max-w-xl text-textmuted text-base sm:text-lg leading-relaxed"
          >
            Final-year Master&apos;s student at TUKE · Living in Košice, Slovakia ·
            Passionate about crafting beautiful web experiences
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => scrollToId('projects')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-textmain text-bg font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
            >
              View My Work
              <FiArrowDown size={15} />
            </button>
            <a
              href="/Stanislav_Poklemba_CV_en.pdf"
              download="Stanislav_Poklemba_CV_en.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-black/15 text-textmain font-semibold text-sm tracking-wide hover:border-black/30 hover:bg-black/[0.04] transition-all"
            >
              <FiDownload size={15} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-black/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
