import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import ThemeSwitch from '../../../theme/ThemeSwitch';

const DrawerComponent = ({ openDrawer, setOpenDrawer, isMatch, darkMode, setDarkMode }) => {

  return (
    <Drawer
      anchor='right'
      onClose={() => { setOpenDrawer(false) }}
      open={isMatch && openDrawer}
    >
      <List>
        <ListItem button divider>
          <Button href='#home' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </Button>
        </ListItem>

        <ListItem button divider>
          <Button href='#skills' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Skills</ListItemText>
            </ListItemIcon>
          </Button>
        </ListItem>

        <ListItem button divider>
          <Button href='#projects' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemIcon>
          </Button>
        </ListItem>

        <ListItem button divider>
          <Button href='#about' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>About Me</ListItemText>
            </ListItemIcon>
          </Button>
        </ListItem>

        <ListItem button divider>
          <Button href='#contact' onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Contact Me</ListItemText>
            </ListItemIcon>
          </Button>
        </ListItem>

        <ListItem>
          <Button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            </ListItemIcon>
          </Button>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerComponent;
