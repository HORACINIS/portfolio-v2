import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../images/avatar.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './HeroCoverStyles';

const HeroCover = () => {
  const classes = useStyles();
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
          I'm Horacio Moran, junior Software Developer.
        </Typography>
        <Avatar alt="Horacio" src={avatar} className={classes.avatar} />
        <Grid justify='center' item container className={classes.heroCoverIconsContainer}>
          <Grid item>
            <GitHubIcon className={classes.heroCoverIcons} />
          </Grid>
          <Grid item>
            <TwitterIcon className={classes.heroCoverIcons} />
          </Grid>
          <Grid item>
            <LinkedInIcon className={classes.heroCoverIcons} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default HeroCover;