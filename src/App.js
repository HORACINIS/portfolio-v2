import React from 'react';
import Navbar from './components/nav/navbar/Navbar';
import HeroCover from './components/heroCover/HeroCover'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import BottomNavbar from './components/nav/bottomNavbar/BottomNavbar';
import './App.css';

function App() {

  return (
    <div className='container'>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroCover />
        <Skills />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
      <footer>
        <BottomNavbar />
      </footer>
    </div>
  );
}

export default App;
