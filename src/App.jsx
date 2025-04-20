import './App.css'
import React from 'react'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Cursor } from './Components/Cursor'
import { Education } from './Components/Education'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'

function App() {

  return (
    <>
    <main>
      <Cursor/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </main>
      
    </>
  )
}

export default App
