import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  textContainer: {
    marginTop: '10vh',
    minHeight: '85vh',
    height: '80vh',
    width: '100vw',
    maxHeight: '100vh'


  },
  welcomeText: {
    color: 'purple',
    fontSize: '10vw',
  },
  introText: {
    fontSize: '8vw'
  }
}))


const HeroCover = () => {
  const classes = useStyles();
  return (
    <section className={classes.textContainer}>
      <Typography
        className={classes.welcomeText}
        variant='h1'
        align='center'
      >
        Welcome to my portfolio
      </Typography>
      <Typography
        className={classes.introText}
        variant='h5'
        align='center'
      >
        wena
      </Typography>
    </section>
  )
}

export default HeroCover;