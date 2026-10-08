import { useState, useRef, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SectionTitle } from './About.jsx'
import marathon       from '../assets/photos/marathon.webp'
import marathonPeace from '../assets/photos/marathon_peace_2026.jpg'
import brooklynBridge from '../assets/photos/brooklyn_bridge.webp'
import mosque         from '../assets/photos/mosque.webp'
import treviFountain  from '../assets/photos/trevi_fountain.webp'
import statueLiberty  from '../assets/photos/statue_liberty.webp'
import dubai          from '../assets/photos/dubai.webp'
import washington     from '../assets/photos/washington.webp'
import matterhorn     from '../assets/photos/matterhorn.webp'

const photos = [
  { src: matterhorn,     caption: 'Matterhorn, Switzerland',        category: 'Travel'  },
  { src: treviFountain,  caption: 'Trevi Fountain, Rome',           category: 'Travel'  },
  { src: marathon, caption: 'Košice Peace Half Marathon 2026', captionUrl: 'https://www.kosicemarathon.com/kphm/', category: 'Running' },
  { src: marathonPeace, caption: 'Košice Peace Marathon 2026', category: 'Running' },
  { src: statueLiberty,  caption: 'Statue of Liberty, NY',          category: 'Travel'  },
  { src: brooklynBridge, caption: 'Brooklyn Bridge, NY',            category: 'Travel',  objectPosition: 'center top' },
  { src: mosque,         caption: 'Sheikh Zayed Mosque, Abu Dhabi', category: 'Travel'  },
  { src: dubai,          caption: 'Dubai Desert',                   category: 'Travel'  },
  { src: washington,     caption: 'Washington D.C.',                category: 'Travel'  },
]

const extras = [
  { label: 'Food & Cuisine', detail: 'Hunting for the best local food on every trip' },
  { label: 'Hiking',         detail: 'Getting off the beaten path whenever possible' },
  { label: 'Reading',        detail: 'Self-development and mindset books' },
  { label: 'Podcasts',       detail: 'Educational content to keep learning daily' },
]

function Lightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowLeft')   onPrev()
      if (e.key === 'ArrowRight')  onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors"
        aria-label="Previous"
      >‹</button>

      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
        />
        <div className="mt-3 text-center">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/45 mb-0.5">
            {photo.category}
          </p>
          <p className="text-sm font-semibold text-white">{photo.captionUrl ? (<a href={photo.captionUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/80">{photo.caption}</a>) : photo.caption}</p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors"
        aria-label="Next"
      >›</button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors"
        aria-label="Close"
      >✕</button>
    </div>
  )
}

// 3 copies: [clone | real | clone] — teleport keeps user in the middle set
const tripled = [...photos, ...photos, ...photos]

export default function Hobbies() {
  const [active, setActive] = useState(null)
  const trackRef  = useRef(null)
  const jumping   = useRef(false)

  // Start scrolled to the middle set
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollLeft = el.scrollWidth / 3
  }, [])

  // Teleport: when user drifts into the first or last clone set, jump silently
  const handleScroll = useCallback(() => {
    const el = trackRef.current
    if (!el || jumping.current) return
    const setW = el.scrollWidth / 3
    if (el.scrollLeft < setW) {
      jumping.current = true
      el.scrollLeft += setW
      requestAnimationFrame(() => { jumping.current = false })
    } else if (el.scrollLeft >= setW * 2) {
      jumping.current = true
      el.scrollLeft -= setW
      requestAnimationFrame(() => { jumping.current = false })
    }
  }, [])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('figure')
    const step = card ? card.offsetWidth + 12 : 292
    // Snap to the exact next card position instead of scrollBy (prevents double-skip)
    const target = Math.round(el.scrollLeft / step + dir) * step
    el.scrollTo({ left: target, behavior: 'smooth' })
  }

  const close = () => setActive(null)
  const prev  = () => setActive(i => (i - 1 + photos.length) % photos.length)
  const next  = () => setActive(i => (i + 1) % photos.length)

  return (
    <section id="hobbies" className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Off the Clock"
          title="Beyond the Code"
          subtitle="What keeps me going outside of programming."
        />

        {/* Scroll-snap slider — no CSS transform on track, no quality loss */}
        <div className="relative mb-8">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#f9f9f7] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#f9f9f7] to-transparent z-10" />

          {/* Arrows */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:shadow-sm transition-all"
          >
            <FiChevronLeft size={17} className="text-textmain" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:shadow-sm transition-all"
          >
            <FiChevronRight size={17} className="text-textmain" />
          </button>

          {/* Track — native scroll + teleport loop, no transform, no quality loss */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex items-start gap-3 overflow-x-auto px-1 py-1"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {tripled.map((p, i) => (
              <figure
                key={i}
                className="relative shrink-0 overflow-hidden rounded-xl cursor-zoom-in group"
                style={{
                  scrollSnapAlign: 'start',
                  width: 'clamp(220px, 22vw, 280px)',
                  aspectRatio: '3 / 4',
                }}
                onClick={() => setActive(i % photos.length)}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: p.objectPosition || 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2.5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-white/50 mb-0.5">
                    {p.category}
                  </p>
                  <p className="text-xs font-semibold text-white leading-tight">{p.captionUrl ? (<a href={p.captionUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="underline underline-offset-2">{p.caption}</a>) : p.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Extras grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
          {extras.map((item) => (
            <div key={item.label} className="bg-surface p-5 sm:p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-textmuted mb-2">
                {item.label}
              </p>
              <p className="text-sm text-textmain leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          photo={photos[active]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
