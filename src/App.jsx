import './App.css'
import React from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Cursor } from './components/Cursor.jsx'
import { Education } from './components/Education.jsx'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact.jsx'


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
