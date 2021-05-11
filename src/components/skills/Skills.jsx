import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { useStyles } from './SkillsStyles';
import { SiJavascript, SiReact } from 'react-icons/si';


const Skills = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Container className={classes.root} id='skills' style={{ border: 'solid black 2px' }}>
        <Typography className={classes.title} variant='h3'>Skills</Typography>
        <List>
          <Grid container>

            <Grid item>
              <ListItem>
                <ListItemIcon>
                  <SiJavascript />
                </ListItemIcon>
                <ListItemText primary='JavaScript' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SiReact />
                </ListItemIcon>
                <ListItemText primary='React' />
              </ListItem>
            </Grid>

            <Grid item>
              <ListItem>
                <Avatar>
                  <SiJavascript />
                </Avatar>
                <ListItemText primary='JavaScript' />
              </ListItem>
              <ListItem>
                <Avatar>
                  <SiReact />
                </Avatar>
                <ListItemText primary='React' />
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Container>


    </Paper>
  )
}

export default Skills;





























// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { useStyles } from './SkillsStyles';

// const Skills = () => {
//   const classes = useStyles();
//   return (
//     <Paper square>
//       <Grid className={classes.root} id='skills' style={{ border: 'solid black 2px' }}>
//         <Typography className={classes.title} variant='h3'>Skills</Typography>
//       </Grid>
//     </Paper>
//   )
// }

// export default Skills;