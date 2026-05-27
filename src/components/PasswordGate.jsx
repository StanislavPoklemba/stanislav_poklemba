import { useState } from 'react'
import { motion } from 'framer-motion'
import heroPhoto from '../assets/photos/CV_photo.webp'

const HASH = '0b4e0209614cddfc0064a3037ba2d3f0f2d8f00751140e0c47ffcec1b6bd5fa5'

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const hashed = await sha256(password)
    if (hashed === HASH) {
      localStorage.setItem('sp_unlocked', '1')
      onUnlock()
    } else {
      setError(true)
      setPassword('')
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <div className="min-h-screen bg-bg text-textmain flex items-center justify-center px-5">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-8">

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            className="w-[220px] h-[220px] rounded-full overflow-hidden mx-auto"
            style={{ boxShadow: '0 0 0 3px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.09)' }}
          >
            <img
              src={heroPhoto}
              alt="Stanislav Poklemba"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 72%' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-textmuted text-base tracking-wide mb-1">Hi, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text leading-tight">
            Stanislav Poklemba
          </h1>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full flex flex-col items-center gap-3"
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
            className={`w-full max-w-xs px-5 py-3 rounded-full border text-center text-sm outline-none transition-all bg-surfaceAlt
              ${error
                ? 'border-red-400 placeholder-red-300'
                : 'border-border focus:border-black/30'
              }`}
          />
          {error && (
            <p className="text-red-400 text-sm">Incorrect password</p>
          )}
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-textmain text-bg font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            Enter
          </button>
        </motion.form>

      </div>
    </div>
  )
}
