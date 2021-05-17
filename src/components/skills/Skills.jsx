import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useStyles } from './SkillsStyles';


// icons of tech used
import { SiCss3, SiJavascript, SiReact, SiRails, SiPostgresql, SiBootstrap, SiMaterialUi } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
import { FaGitAlt } from 'react-icons/fa';

const skillsList = [
  {
    icon: <ImHtmlFive />,
    name: 'HTML'
  },
  {
    icon: <SiCss3 />,
    name: 'CSS'
  },
  {
    icon: <SiJavascript />,
    name: 'JavaScript'
  },
  {
    icon: <SiReact />,
    name: 'React'
  },
  {
    icon: <DiRuby />,
    name: 'Ruby'
  },
  {
    icon: <SiRails />,
    name: 'Ruby on Rails'
  },
  {
    icon: <SiPostgresql />,
    name: 'PostgreSQL'
  },
  {
    icon: <SiBootstrap />,
    name: 'Bootstrap'
  },
  {
    icon: <SiMaterialUi />,
    name: 'Material-UI'
  },
  {
    icon: <FaGitAlt />,
    name: 'Git'
  }
];

const Skills = () => {
  const classes = useStyles();

  const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0
      })
    }
  }, [inView, animation]);

  return (
    <Paper className={classes.root} id='skills' square>
      <div ref={ref}>
        <Container>
          <Typography className={classes.mainTitle} variant='h3'>Skills</Typography>
          <Typography className={classes.proficientTitle} variant='h6'>Proficient in:</Typography>
          <motion.div animate={animation}>
            <Grid container justify='center' alignItems='center'>
              {skillsList.map((item) => (
                <List key={item.name}>
                  <ListItem className={classes.listItems}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                  </ListItem>
                </List>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </div>
    </Paper>
  )
}

export default Skills;