import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ThemeSwitch from '../../theme/ThemeSwitch'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from './drawer/Drawer';
import { IoHome } from 'react-icons/io5';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-scroll';
import { useStyles } from './NavbarStyles';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {

  const classes = useStyles();
  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'));

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography className={classes.namePosition} variant="h6">
            <Link to='home' smooth offset={-60} duration={1000}>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', delay: 1 }}>
                <Button className={classes.nameColour}>Horacio M.</Button>
              </motion.div>
            </Link>
          </Typography>
          {isMatch ?
            <Button color='inherit' onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon className={classes.menuButton} />
            </Button>
            : (
              <div>
                <Link to='home' activeClass={classes.active} spy smooth offset={-80} duration={1000}>
                  <Button className={classes.nameColour}>
                    <IoHome />
                  </Button>
                </Link>
                <Link to='skills' activeClass={classes.active} spy smooth offset={-60} duration={1000}>
                  <Button className={classes.menuButton} color="inherit">Skills</Button>
                </Link>
                <Link to='projects' activeClass={classes.active} spy smooth offset={-60} duration={1000}>
                  <Button className={classes.menuButton} color="inherit">Projects</Button>
                </Link>
                <Link to='about' activeClass={classes.active} spy smooth duration={1000}>
                  <Button className={classes.menuButton} color="inherit">About</Button>
                </Link>
                {/* <Link to='contact' spy smooth={true} duration={1000}>
                  <Button className={classes.menuButton} color="inherit">Contact</Button>
                </Link> */}
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
};

export default Navbar;