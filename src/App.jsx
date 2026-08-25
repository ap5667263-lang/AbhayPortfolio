import { useState } from 'react'
import Loader from './components/Loader/Loader.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skill from './components/Skills/Skill.jsx'
import Education from './components/Education/Education.jsx'
import Project from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Portfolio sirf tab render ho jab loader complete ho */}
      {!loading && (
        <>
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Education />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
