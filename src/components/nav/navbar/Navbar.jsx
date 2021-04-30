import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from './drawer/Drawer';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';

const Navbar = () => {

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
          <Typography className={classes.title} variant="h6">Horacio M.</Typography>
          {isMatch ?
            <Button color='inherit' onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon className={classes.menuButton} />
            </Button>
            : (
              <section>
                <Button className={classes.menuButton} color="inherit">Projects</Button>
                <Button className={classes.menuButton} color="inherit">Skills</Button>
                <Button className={classes.menuButton} color="inherit">About Me</Button>
                <Button className={classes.menuButton} color="inherit">Contact Me</Button>
              </section>
            )
          }
          < DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} isMatch={isMatch} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;












// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
// import DrawerComponent from './drawer/Drawer';
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useStyles } from './styles';

// const Navbar = () => {

//   const classes = useStyles();
//   //Breakpoints
//   const theme = useTheme();
//   console.log(theme)

//   const isMatch = useMediaQuery(theme.breakpoints.down('md'))
//   console.log(isMatch)



//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar className={classes.root}>
//         <Toolbar>
//             <DrawerComponent />
//           <Typography className={classes.title} variant="h6">Horacio Moran</Typography>
//           <section>
//             <Button className={classes.menuButton} color="inherit">Projects</Button>
//             <Button className={classes.menuButton} color="inherit">Skills</Button>
//             <Button className={classes.menuButton} color="inherit">About Me</Button>
//             <Button className={classes.menuButton} color="inherit">Contact Me</Button>
//             {/* <Button color='inherit'>
//               <MenuIcon className={classes.menuButton} />
//             </Button> */}
//           </section>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//     </React.Fragment>
//   );
// }

// export default Navbar;