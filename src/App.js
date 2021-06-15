import React, { useState, useEffect } from 'react';
import Navbar from './components/nav/navbar/Navbar';
import HeroCover from './components/heroCover/HeroCover'
import Skills from './components/skills/Skills';
import Projects from './components/myProjects/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
// import ContactMe from './components/contactMe/ContactMe';
import BottomNavbar from './components/nav/bottomNavbar/BottomNavbar';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './Theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getThemeFromStorage = () => {
    const reference = localStorage.getItem('darkMode');
    const referenceToJsObject = JSON.parse(reference);
    if (reference !== null) {
      setDarkMode(referenceToJsObject);
    }
  };
  useEffect(() => {
    getThemeFromStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', (darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main>
        <HeroCover />
        <Skills />
        <Projects />
        <AboutMe />
        {/* <ContactMe /> */}
      </main>
      <footer>
        <BottomNavbar />
      </footer>
    </ThemeProvider>
  );
}

export default App;
