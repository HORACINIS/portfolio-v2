import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../images/avatar.jpg';
import { useStyles } from './styles'

const HeroCover = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
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
          I'm Horacio Moran, junior Software Developer.
        </Typography>
        <Grid>
          <Avatar alt="Horacio" src={avatar} className={classes.avatar} />
        </Grid>
      </Grid>
    </section>
  )
}

export default HeroCover;