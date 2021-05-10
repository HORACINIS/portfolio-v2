import React, { useState, useEffect } from 'react';
import Navbar from './components/nav/navbar/Navbar';
import HeroCover from './components/heroCover/HeroCover'
import Skills from './components/skills/Skills';
import Projects from './components/myProjects/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import BottomNavbar from './components/nav/bottomNavbar/BottomNavbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',

      // primary: {
      //   main: '#008000' 
      // }
    }
  })
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ffb300',
        light: '#ffe54c',
        dark: '#c68400',
        constrastText: '#000000'
      }
    }
  });

  const handleThemeSwitch = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }

  // const getLocalStorageStoredTheme = () => {
  //   return localStorage.getItem('darkMode');
  // }

  // useEffect(() => {
  //   getLocalStorageStoredTheme()
  //   if (getLocalStorageStoredTheme() !== null) {
  //     setDarkMode(Boolean(getLocalStorageStoredTheme()))
  //   } else {
  //     localStorage.setItem('darkMode', darkMode.toString());
  //   }
  // }, []);





  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* <div> */}
      <header>
        <Navbar onThemeSwitch={handleThemeSwitch} darkMode={darkMode} setDarkMode={setDarkMode} />
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
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
