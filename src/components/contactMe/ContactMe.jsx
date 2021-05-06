import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './ContactMeStyles';

const ContactMe = () => {
  const classes = useStyles();
  return (
    <Paper id='contact'>
      <Grid className={classes.root} container>
        <h1>Contact Me</h1>
      </Grid>
    </Paper>
  )
}

export default ContactMe;