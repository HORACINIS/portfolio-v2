import React, { useState } from 'react';
import profilePic from '../../images/mainPic.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import { useStyles } from './AboutMeStyles';

const AboutMe = () => {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);

  return (
    <Paper id='about' className={classes.root} square>
      <Container>
        <Typography variant='h1' className={classes.title}>About Me</Typography>
        <img src={profilePic} className={classes.profilePic} alt='profile' />
        <Typography variant='subtitle1' className={classes.textContent}>
          I am a tech enthusiast, and it is the curiosity that drives me.
          To pursue my goal to become a full stack developer, I completed
          an intensive full-time bootcamp at Coder Academy Sydney, subsequently,
          a one-month internship at Leap Dev where I was part of a team and got
          to contribute towards a real-world project.
        {showMore && (
            <Typography variant='subtitle1' className={classes.textContent}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt unde dolorum placeat dolorem culpa qui natus laboriosam accusamus ab, error facilis! Laudantium porro numquam id recusandae eos, voluptas explicabo nihil rem, fuga et tenetur, distinctio officia quia eaque iste doloribus commodi consequatur adipisci eligendi aut ex reiciendis. Suscipit placeat, porro id incidunt magni dolor fugit saepe sint itaque delectus dicta eaque? Esse natus voluptas animi repellendus nulla tempore unde voluptate doloribus necessitatibus nesciunt, blanditiis distinctio quidem! Voluptatum, debitis reprehenderit. 
            </Typography>
          )}
        </Typography>
        <Button
          className={classes.showMoreBtn}
          variant='contained'
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>


        {/* <h5 className={classes.name}>Horacio</h5>
        <p className={classes.bottomText}>
        Lorem ipsum dolor sit amet consectetur.
          </p> */}
      </Container>
    </Paper>
  )
}

export default AboutMe;