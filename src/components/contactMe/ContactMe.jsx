import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './ContactMeStyles';

const ContactMe = () => {
  const classes = useStyles();
  return (
    <Paper id='contact' square>
      <Grid className={classes.root} container>
        <Typography className={classes.title} variant='h3'>Contact Me</Typography>
      </Grid>
    </Paper>
  )
}

export default ContactMe;