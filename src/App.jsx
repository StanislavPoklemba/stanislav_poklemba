import Navbar    from './components/Navbar.jsx'
import Hero      from './components/Hero.jsx'
import About     from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects  from './components/Projects.jsx'
import Hobbies   from './components/Hobbies.jsx'
import Contact   from './components/Contact.jsx'
import Footer    from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-textmain">
      <Navbar />
      <main>

        {/* HERO */}
        <Hero />

        {/* ABOUT — warm tint */}
        <div className="bg-surfaceAlt section-divider">
          <About />
        </div>

        {/* EXPERIENCE */}
        <div className="section-divider">
          <Experience />
        </div>

        {/* PROJECTS — warm tint */}
        <div className="bg-surfaceAlt section-divider">
          <Projects />
        </div>

        {/* HOBBIES */}
        <div className="section-divider">
          <Hobbies />
        </div>

        {/* CONTACT — warm tint */}
        <div className="bg-surfaceAlt section-divider">
          <Contact />
        </div>

      </main>
      <Footer />
    </div>
  )
}
