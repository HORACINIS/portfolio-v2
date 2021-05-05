import React, { useState } from 'react';
import Navbar from './components/nav/navbar/Navbar';
import HeroCover from './components/heroCover/HeroCover'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import BottomNavbar from './components/nav/bottomNavbar/BottomNavbar';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';



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
      type: 'light'
    }
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className='container'>
        <header>
          <Navbar />
        </header>
        <main>
          {/* el switch hay que moverlo de aqui */}
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
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
    </ThemeProvider>
  );
}

export default App;
