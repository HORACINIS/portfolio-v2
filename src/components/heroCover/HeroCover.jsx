import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './styles'


const HeroCover = () => {
  const classes = useStyles();
  return (
    <section className={classes.textContainer}>
      <Grid container justify='center' direction='column'>
        <Typography
          className={classes.welcomeText}
          variant='h2'
          align='center'
        >
          Welcome to my portfolio
        </Typography>
        <Typography
          className={classes.introText}
          variant='h5'
          align='center'
        >
          I'm Horacio Moran, junior Software Developer
        </Typography>
      </Grid>
    </section>
  )
}

export default HeroCover;