import React from 'react';
import Project from './Project';
import { projectsList } from './projectsList';

const Projects = () => {
  console.log(projectsList)
  return (
    <section id='projects' style={{ border: 'red solid 2px' }}>
      <h1>Projects</h1>
      {projectsList.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  )
}

export default Projects;

