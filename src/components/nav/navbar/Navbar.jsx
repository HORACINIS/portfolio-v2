import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ThemeSwitch from '../../theme/ThemeSwitch'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from './drawer/Drawer';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './NavbarStyles';

const Navbar = ({ darkMode, setDarkMode }) => {

  const classes = useStyles();
  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography className={classes.namePosition} variant="h6"><Button className={classes.nameColour} href='#home'>Horacio M.</Button></Typography>
          {isMatch ?
            <Button color='inherit' onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon className={classes.menuButton} />
            </Button>
            : (
              <div>
                <Button href='#projects' className={classes.menuButton} color="inherit">Projects</Button>
                <Button href='#skills' className={classes.menuButton} color="inherit">Skills</Button>
                <Button href='#about' className={classes.menuButton} color="inherit">About</Button>
                <Button href='#contact' className={classes.menuButton} color="inherit">Contact</Button>
                <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            )
          }
          < DrawerComponent
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            isMatch={isMatch}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;