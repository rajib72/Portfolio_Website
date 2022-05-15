import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Pretext from './Components/PreText/Pretext'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

export const App = () => {
  return (
    <>
      <Home/>
      <Pretext text="About Me"/>
      <About/>
      <Pretext text="Skills"/>
      <Skills/>
      <Pretext text="My Projects"/>
      <Projects/>
      <Pretext text="Contact Me"/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
