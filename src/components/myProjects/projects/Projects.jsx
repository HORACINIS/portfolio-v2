import React from 'react';
import Project from '../project/Project';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { projectsList } from '../data/projectsList';
import { useStyles } from './ProjectsStyles';

const Projects = () => {
  const classes = useStyles();

  return (
    <Paper id='projects' className={classes.root} square>
      <Typography className={classes.title} variant='h3'>Projects</Typography>
      <Grid container justify='center'>
        {projectsList.map((project, index) => (
          <Grid key={index} item lg={4} md={5} sm={10} xs={12} style={{ marginLeft: '1px' }}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Projects;

