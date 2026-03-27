import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Head.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero />
     <About />
     <Skills/>
     <Projects />
     <Experience />
     <Education />
     <Certificates/>
     <Contact />
     <Footer/>

    </>
  )
}

export default App
