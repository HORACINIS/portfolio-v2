import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import ThemeSwitch from '../../../theme/ThemeSwitch';
import { useStyles } from './DrawerStyles';

const DrawerComponent = ({ openDrawer, setOpenDrawer, isMatch, darkMode, setDarkMode }) => {

  const classes = useStyles();

  return (
    <Drawer
      anchor='right'
      onClose={() => { setOpenDrawer(false) }}
      open={isMatch && openDrawer}
    >
      <List>
        <ListItem button divider>
          <Link to='home' activeClass={classes.active} spy smooth offset={-80} duration={1000}>
            <Button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </Button>
          </Link>
        </ListItem>

        <ListItem button divider>
          <Link to='skills' activeClass={classes.active} spy smooth offset={-60} duration={1000}>
            <Button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Skills</ListItemText>
              </ListItemIcon>
            </Button>
          </Link>
        </ListItem>

        <ListItem button divider>
          <Link to='projects' activeClass={classes.active} spy smooth offset={-60} duration={1000}>
            <Button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Projects</ListItemText>
              </ListItemIcon>
            </Button>
          </Link>
        </ListItem>

        <ListItem button divider>
          <Link to='about' activeClass={classes.active} spy smooth duration={1000}>
            <Button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>About Me</ListItemText>
              </ListItemIcon>
            </Button>
          </Link>
        </ListItem>

        {/* <ListItem button divider>
          <Link to='contact' smooth duration={1000}>
          <Button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Contact Me</ListItemText>
            </ListItemIcon>
          </Button>
          </Link>
        </ListItem> */}

        <ListItem onClick={() => {
          setTimeout(() => {
            setOpenDrawer(false);
          }, 1000)
        }}>
          <ListItemIcon>
            <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerComponent;
