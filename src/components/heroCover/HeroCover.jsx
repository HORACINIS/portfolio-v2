import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../images/avatar.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { motion } from 'framer-motion';
import { useStyles } from './HeroCoverStyles';

const HeroCover = () => {
  const classes = useStyles();

  const formsOfContact = [
    {
      name: 'github',
      url: 'https://github.com/HORACINIS',
      icon: <GitHubIcon className={classes.heroCoverIcons} />
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/horacinis',
      icon: <TwitterIcon className={classes.heroCoverIcons} />
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/horacio-moran-837a891b4/',
      icon: <LinkedInIcon className={classes.heroCoverIcons} />
    }
  ];

  return (
    <Paper className={classes.root} id='home' square>
      <Grid container justify='center' direction='column'>
        <Typography
          className={classes.welcomeText}
          variant='h2'
          align='center'
        >
          Welcome to my portfolio.
        </Typography>
        <Typography
          className={classes.introText}
          variant='h5'
          align='center'
        >
          I'm <motion.span animate={{ color: '#ffb300', background: '#424242' }} transition={{ duration: 2 }}>Horacio Moran</motion.span>, junior Software Developer.
        </Typography>
        <Avatar alt="Horacio" src={avatar} className={classes.avatar} />
        <Grid justify='center' item container className={classes.heroCoverIconsContainer} >
          {formsOfContact.map((item) => (
            <Grid item>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
                <IconButton href={item.url} target='_blank' aria-label={item.name} >
                  {item.icon}
                </IconButton>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default HeroCover;










// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import avatar from '../../images/avatar.jpg';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import { motion } from 'framer-motion';
// import { useStyles } from './HeroCoverStyles';

// const HeroCover = () => {
//   const classes = useStyles();
//   return (
//     <Paper className={classes.root} id='home' square>
//       <Grid container justify='center' direction='column'>
//         <Typography
//           className={classes.welcomeText}
//           variant='h2'
//           align='center'
//         >
//           Welcome to my portfolio.
//         </Typography>
//         <Typography
//           className={classes.introText}
//           variant='h5'
//           align='center'
//         >
//           I'm <motion.span animate={{ color: '#ffb300', background: '#424242' }} transition={{ duration: 2 }}>Horacio Moran</motion.span>, junior Software Developer.
//         </Typography>
//         <Avatar alt="Horacio" src={avatar} className={classes.avatar} />
//         <Grid justify='center' item container className={classes.heroCoverIconsContainer} >
//           <Grid item>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
//               <IconButton href='https://github.com/HORACINIS' target='_blank' aria-label='github' >
//                 <GitHubIcon className={classes.heroCoverIcons} />
//               </IconButton>
//             </motion.div>
//           </Grid>
//           <Grid item>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
//               <IconButton href='https://twitter.com/horacinis' target='_blank' aria-label='twitter'>
//                 <TwitterIcon className={classes.heroCoverIcons} />
//               </IconButton>
//             </motion.div>
//           </Grid>
//           <Grid item>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
//               <IconButton href='https://www.linkedin.com/in/horacio-moran-837a891b4/' target='_blank' aria-label='linkedin'>
//                 <LinkedInIcon className={classes.heroCoverIcons} />
//               </IconButton>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   )
// }

// export default HeroCover;