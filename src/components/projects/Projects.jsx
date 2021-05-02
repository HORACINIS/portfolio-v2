import React from 'react';
import Project from './Project';
import Grid from '@material-ui/core/Grid';
import { projectsList } from './projectsList';

const Projects = () => {
  console.log(projectsList)
  return (
    <section id='projects' style={{ border: 'red solid 2px' }}>
      <h1>Projects</h1>
      <Grid container justify='center'>
        {projectsList.map((project, index) => (
          // <Grid key={index} item lg={3} md={6} sm={11} style={{marginLeft: '1px'}}>
          <Grid key={index} item lg={4} md={5} sm={10} style={{ marginLeft: '1px' }}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Projects;

