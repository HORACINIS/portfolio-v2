import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BiWorld } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import { useStyles } from './ProjectStyles';


const Project = ({ title, intro, body, img, iconsTechUsed, links, links: { siteLive, repoURL } }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} raised>
      {/* <CardActionArea> */}
      <CardHeader
        // className={classes.header}
        title={title} // title
        subheader={intro}  // subtitle 
      />
      <CardMedia
        className={classes.media}
        image={img}  // image src 
        title={title} // image alt
      />
      {/* <CardContent>
        <Typography variant="body1" component="p">
          {body}
        </Typography>
      </CardContent> */}
      {/* </CardActionArea> */}
      <CardActions disableSpacing>
        {iconsTechUsed.map((icon, index) => ( // icons of tech used
          <IconButton className={classes.techIcons} key={index} aria-label='Tech used'>
            {icon}
          </IconButton>
        ))}
        {links &&
          <IconButton
            style={{ color: 'red' }}
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{siteLive || repoURL ? 'Links' : 'No Links'}</Typography>
          {/* no siteLive icon will be displayed if there isn't a siteLive in the projectsList object file */}
          {siteLive &&
            <IconButton className={classes.linksIcons} aria-label='site live' target='_blank' href={siteLive}>
              <BiWorld />
            </IconButton>
          }
          {/* no github icon will be displayed if there isn't a repoURL in the projectsList object file */}
          {repoURL &&
            <IconButton className={classes.linksIcons} aria-label='repo url' target='_blank' href={repoURL}>
              <SiGithub />
            </IconButton>
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Project;