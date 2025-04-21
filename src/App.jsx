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
      <section id="hero"><Hero/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="education"><Education/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Contact/></section>
    </main>
    
    </>
  )
}

export default App
