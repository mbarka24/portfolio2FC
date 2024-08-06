import { useState } from 'react'
import styles from './App.module.css'
import Layout from './layout';
import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import AboutSection from './components/Sections/About-section/Layout/AboutSection';
import HeroSection from './components/Sections/Hero-section/HeroSection';
import AboutMe from './components/Sections/About-section/AboutMe/AboutMe';
import Education from './components/Sections/About-section/Education/Education';
import Experiences from './components/Sections/About-section/Experiences/Experience';
import ProjectSection from './components/Sections/Projects-section/ProjectSection';
import ContactSection from './components/Sections/Contact-section/ContactSection';



function App() {
  return (
    <main className={styles.main}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HeroSection />} />
          <Route index element={<HeroSection />} />
          <Route path='/about' element={<AboutSection />} >
            <Route index element={<AboutMe />} />
            <Route path='/about/education' element={<Education />} />
            <Route path='/about/experiences' element={<Experiences />} />

          </Route>
          <Route path='/projects' element={<ProjectSection />} />
          <Route path='/contact' element={<ContactSection />} />


        </Route>
      </Routes>
    </main>
  )
}

export default App;
