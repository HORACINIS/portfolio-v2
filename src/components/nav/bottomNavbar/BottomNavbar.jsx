import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { iconsEffects } from './BottomNavbarEffects';
import { motion } from 'framer-motion';
import { useStyles } from './BottomNavbarStyles';


const BottomNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const contactLinkIcons = [
    {
      name: 'github',
      url: 'https://github.com/HORACINIS',
      icon: <GitHubIcon className={classes.icons} />
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/HORACINIS',
      icon: <TwitterIcon className={classes.icons} />
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/horacio-moran-837a891b4/',
      icon: <LinkedInIcon className={classes.icons} />
    },
    {
      name: 'email',
      url: 'mailto: horacinis@gmail.com',
      icon: <EmailIcon className={classes.icons} />
    }
  ];

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {contactLinkIcons.map((item) => (
        <BottomNavigationAction
          key={item.name}
          href={item.url}
          target='_blank'
          icon={
            <motion.div
              whileHover={iconsEffects.hover}
              whileTap={iconsEffects.whileTap}
              transition={iconsEffects.trans}
            >
              {item.icon}
            </motion.div>} />
      ))}
    </BottomNavigation>
  );
}

export default BottomNavbar;