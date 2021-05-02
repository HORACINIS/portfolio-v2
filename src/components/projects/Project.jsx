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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 545,
    maxWidth: 745,
    margin: 20,
    flexBasis: '0%'
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    // paddingTop: '60.25%', // 16:9
    paddingTop: '70.25%', // 16:9


  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Project = ({ title, intro, body, img, iconsTechUsed, siteLive, repoURL }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} raised>
      {/* <CardActionArea> */}
      <CardHeader
        title={title} // title
        subheader={intro}    // subtitle 
      />
      <CardMedia
        className={classes.media}
        image={img}  // image src 
        title={title} // image alt
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {body}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions disableSpacing>
        {iconsTechUsed.map((icon, index) => ( // icon of tech used
          <IconButton key={index} aria-label='Tech used'>
            {icon}
          </IconButton>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Links</Typography>
          <IconButton aria-label='site live' target='_blank' href={siteLive}>
            <BiWorld />
          </IconButton>
          <IconButton aria-label='repo url' target='_blank' href={repoURL}>
            <SiGithub />
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Project;