import React, { useState } from 'react';
import Navbar from './components/nav/navbar/Navbar';
import HeroCover from './components/heroCover/HeroCover'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import BottomNavbar from './components/nav/bottomNavbar/BottomNavbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
      // primary: 
    }
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* <div> */}
      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
