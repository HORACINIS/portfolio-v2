import React from 'react';
import profilePic from '../../images/mainPic.jpg';

const AboutMe = () => {
  return (
    <section id='about'>
      <h1>About Me</h1>
      <img src={profilePic} alt='profile' />
      <blockquote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, corrupti ex. Adipisci voluptatum velit consequatur tempore recusandae nostrum quae, quaerat, ab tempora amet dolor esse nam facere quam omnis, nesciunt dolorem! Repellendus dolorum quo inventore quis illum, est quae iusto. Dolore optio quibusdam commodi, sequi corrupti natus adipisci laudantium hic?
      </blockquote>
      <h5>Horacio</h5>
      <blockquote>
        Lorem ipsum dolor sit amet consectetur.
      </blockquote>
    </section>
  )
}

export default AboutMe;
