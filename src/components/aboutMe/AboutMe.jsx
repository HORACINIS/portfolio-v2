import React, { useState } from 'react';
import profilePic from '../../images/mainPic.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import { GrDocumentText } from 'react-icons/gr';
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
            <div>
              {/* text to be added below */}
              {/* <Typography variant='subtitle1' className={classes.textContent}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt unde dolorum placeat dolorem culpa qui natus laboriosam accusamus ab, error facilis! Laudantium porro numquam id recusandae eos, voluptas explicabo nihil rem, fuga et tenetur, distinctio officia quia eaque iste doloribus commodi consequatur adipisci eligendi aut ex reiciendis. Suscipit placeat, porro id incidunt magni dolor fugit saepe sint itaque delectus dicta eaque? Esse natus voluptas animi repellendus nulla tempore unde voluptate doloribus necessitatibus nesciunt, blanditiis distinctio quidem! Voluptatum, debitis reprehenderit.
              </Typography> */}

              <Button
                href='https://1drv.ms/b/s!AmXok3_c1XWpgZVumKkoVxOEb3BfJg?e=cVUeBU'
                target='_blank'
                variant="contained"
                color='primary'
                className={classes.resumeBtn}
                startIcon={<GrDocumentText />}
              >
                My Resume
              </Button>
              <Typography variant='h6' className={classes.textContent}>
                I was born in Santiago, Chile. In 2003, I moved to Australia. I am fluent in both
                English and Spanish.
              </Typography>

              <Typography variant='h6'>
                I am a sociable person; I like spending time with family and friends,
                I also enjoy playing guitar and going to the gym as I think it is important
                for a healthy mind.
              </Typography>
              <Typography variant='h6'>
                I love technology. I am always watching reviews and reading about the latest
                technological devices that are coming out. My native language is Spanish.
              </Typography>
              <hr />
              <Typography variant='subtitle1' className={classes.textContent}>
                I worked as a barista in a busy environment for over 5 years, and as much as I enjoyed it,
                I feel as though I'm ready for another stage in my career. A new challenge!
              </Typography>
              <Typography className={classes.textContent}>
                I decided to quit my job as a barista and enrolled into a coding bootcamp at Coder Academy
                Sydney to begin my journey to become a full stack software developer. It was tough and difficult
                as it was intensive and nonstop, and I had to be travelling to Sydney back and forth every week
                for it, but it was totally worth it. It made me realise that I genuinely enjoy learning and
                solving problems, it is highly rewarding!
              </Typography>
              <Typography variant='subtitle1' className={classes.textContent}>
                During my time at Leap Dev, I worked with technologies such as HTML, CSS, JavaScript and React
                for developing an ongoing project for law firms. I worked collaboratively in a team of five and
                communicated closely with the design team and worked with the designs created by them with Figma.
                We used JIRA for project management, such as assigning user stories. Bitbucket was the GIT repository
                management chosen for pulling and committing the developed content from/to GIT repository.
              </Typography>

              <Typography variant='subtitle1' className={classes.textContent}>
                Currently, I am mastering my skills of <b>NodeJS, Express and Mongoose</b>. My projects using these
                technologies, are allowing me to build server-side applications which have the flexibility to
                integrate with my existing projects, as well as future ones.
              </Typography>
              {/* <Typography variant='subtitle1' className={classes.textContent}>
                Currently, I am working on growing my skills by teaching myself NodeJS, 
                Express and Mongoose so that I can build server-side applications which 
                can then be integrated to some of my current and future projects
              </Typography> */}
            </div>
          )}
        </Typography>
        <Button
          className={classes.showMoreBtn}
          variant='outlined'
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      </Container>
    </Paper>
  )
}

export default AboutMe;