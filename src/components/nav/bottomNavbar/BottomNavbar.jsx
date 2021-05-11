import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { useStyles } from './BottomNavbarStyles';


const BottomNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction href='https://github.com/HORACINIS' target='_blank' icon={<GitHubIcon className={classes.icons} />} />
      <BottomNavigationAction href='https://twitter.com/HORACINIS' target='_blank' icon={<TwitterIcon className={classes.icons} />} />
      <BottomNavigationAction href='https://www.linkedin.com/in/horacio-moran-837a891b4/' target='_blank' icon={<LinkedInIcon className={classes.icons} />} />
      <BottomNavigationAction href='mailto: horacinis@gmail.com' target='_blank' icon={<EmailIcon className={classes.icons} />} />
    </BottomNavigation>
  );
}

export default BottomNavbar;
