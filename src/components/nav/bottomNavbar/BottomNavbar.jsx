import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { useStyles } from './style';


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
      <BottomNavigationAction label='GitHub' icon={<GitHubIcon />} />
      <BottomNavigationAction label='Twitter' icon={<TwitterIcon />} />
      <BottomNavigationAction label='LinkedIn' icon={<LinkedInIcon />} />
      <BottomNavigationAction label='Email' icon={<EmailIcon />} />

    </BottomNavigation>
  );
}

export default BottomNavbar;
