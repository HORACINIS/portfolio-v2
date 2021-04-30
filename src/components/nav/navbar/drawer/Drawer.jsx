import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const DrawerComponent = () => {

  const [openDrawer, setOpenDrawer] = useState(true);


  return (
    <Drawer
      anchor='right'
      onClose={() => { setOpenDrawer(false) }}
      open={openDrawer}
    >

      <List>
        <ListItem button divider>
          <ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItemIcon>
        </ListItem>

        <ListItem button divider>
          <ListItemIcon>
            <ListItemText>Skills</ListItemText>
          </ListItemIcon>
        </ListItem>

        <ListItem button divider>
          <ListItemIcon>
            <ListItemText>About Me</ListItemText>
          </ListItemIcon>
        </ListItem>

        <ListItem button divider>
          <ListItemIcon>
            <ListItemText>Contact Me</ListItemText>
          </ListItemIcon>
        </ListItem>


      </List>

    </Drawer>
  )
}

export default DrawerComponent;
