import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './SkillsStyles';

const Skills = () => {
  const classes = useStyles();
  return (
    <Paper square>
      <Grid className={classes.root} id='skills' >
        <Typography className={classes.title} variant='h3'>Skills</Typography>
      </Grid>
    </Paper>
  )
}

export default Skills;