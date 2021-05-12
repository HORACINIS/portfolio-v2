import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
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

  return (
    <Paper className={classes.root} id='skills' square>
      <Container>
        <Typography className={classes.mainTitle} variant='h3'>Skills</Typography>
        <Typography className={classes.proficientTitle} variant='h6'>Proficient in:</Typography>
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
      </Container>
    </Paper>
  )
}

export default Skills;




// const Skills = () => {
//   const classes = useStyles();

//   return (
//     <Paper>
//       <Container id='skills' style={{ border: 'solid black 2px' }}>
//         <Typography className={classes.title} variant='h3'>Skills</Typography>
//         <Typography variant='h5'>Proficient in:</Typography>
//         <div>

//           <GridList cols={5} className={classes.list}>
//             {skillsList.map((item) => (
//               <List key={item.name}>
//                 <ListItem>
//                   <Avatar>
//                     {item.icon}
//                   </Avatar>
//                   <ListItemText primary={item.name} />
//                 </ListItem>
//               </List>
//             ))}
//           </GridList>
//         </div>
//       </Container>
//     </Paper>
//   )
// }

// export default Skills;


