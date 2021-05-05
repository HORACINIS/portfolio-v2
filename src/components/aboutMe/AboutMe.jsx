import React from 'react';
import { tempStyle } from './style';
import profilePic from '../../images/mainPic.jpg';

const AboutMe = () => {
  return (
    <section id='about' style={tempStyle.root}>
      <article>
        <h1 style={tempStyle.title}>About Me</h1>
        <img src={profilePic} style={tempStyle.profilePic} alt='profile' />
        <blockquote style={tempStyle.textContent}>
          Lorem ipsum dolor sit amet consectetut conse dae nostrum quae, quaerat, ab tempora amet dolor esse nam facere quam omnis, nesciunt dolorem! Repellendus dolorum quo inventore quis illum, est quae iusto. Dolore optio quibusdam commodi, sequi corrupti natus adipisci laudantium hic?
          </blockquote>
        <h5 style={tempStyle.name}>Horacio</h5>
        <p style={tempStyle.bottomText}>
          Lorem ipsum dolor sit amet consectetur.
          </p>
      </article>
    </section>
  )
}

export default AboutMe;
