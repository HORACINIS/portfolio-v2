import React from 'react';
import { useStyles } from './AboutMeStyles';
import profilePic from '../../images/mainPic.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Paper id='about' className={classes.root} square>
      <Container>
        <Typography variant='h1' className={classes.title}>About Me</Typography>
        <img src={profilePic} className={classes.profilePic} alt='profile' />
        <Typography variant='subtitle1' className={classes.textContent}>
          I am a tech enthusiast, and it is the curiosity that drives me. To pursue my goal to become a full stack developer, I completed an intensive full-time bootcamp at Coder Academy Sydney, subsequently, a one-month internship at Leap Dev where I was part of a team and got to contribute towards a real-world project.
          </Typography>
        {/* <h5 className={classes.name}>Horacio</h5> */}
        {/* <p className={classes.bottomText}>
        Lorem ipsum dolor sit amet consectetur.
          </p> */}
      </Container>
    </Paper>
  )
}

export default AboutMe;