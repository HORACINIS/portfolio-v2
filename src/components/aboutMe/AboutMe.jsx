import React from 'react';
import { useStyles } from './AboutMeStyles';
import profilePic from '../../images/mainPic.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component='h1' className={classes.title}>About Me</Typography>
      <img src={profilePic} className={classes.profilePic} alt='profile' />
      <blockquote className={classes.textContent}>
        Lorem ipsum dolor sit amet consectetut conse dae nostrum quae, quaerat, ab tempora amet dolor esse nam facere quam omnis, nesciunt dolorem! Repellendus dolorum quo inventore quis illum, est quae iusto. Dolore optio quibusdam commodi, sequi corrupti natus adipisci laudantium hic?
          </blockquote>
      <h5 className={classes.name}>Horacio</h5>
      <p className={classes.bottomText}>
        Lorem ipsum dolor sit amet consectetur.
          </p>
    </Paper>
  )
}

export default AboutMe;
