import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar >
        <Toolbar>
          <Typography className={classes.title} variant="h6">Horacio Moran</Typography>
          <section>
            <Button className={classes.menuButton} color="inherit">Projects</Button>
            <Button className={classes.menuButton} color="inherit">Skills</Button>
            <Button className={classes.menuButton} color="inherit">About Me</Button>
            <Button className={classes.menuButton} color="inherit">Contact Me</Button>
            <Button color='inherit'>
              <MenuIcon className={classes.menuButton} />
            </Button>
          </section>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;