import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './SkillsStyles';

const Skills = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid className={classes.root} id='skills' style={{ border: 'solid black 2px' }}>
        <h1>Skills</h1>
      </Grid>
    </Paper>
  )
}

export default Skills;