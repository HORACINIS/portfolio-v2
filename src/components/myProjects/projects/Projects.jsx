import React from 'react';
import Project from '../project/Project';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { projectsList } from '../data/projectsList';
import { useStyles } from './ProjectsStyles';

const Projects = () => {
  const classes = useStyles();
  console.log(projectsList)

  return (
    <Paper id='projects' className={classes.root} >
      <h1>Projects</h1>
      <Grid container justify='center'>
        {projectsList.map((project, index) => (
          // <Grid key={index} item lg={3} md={6} sm={11} style={{marginLeft: '1px'}}>
          // checkear ese marginLeft de ese Grid de abajo
          <Grid key={index} item lg={4} md={5} sm={10} xs={12} style={{ marginLeft: '1px' }}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Projects;

