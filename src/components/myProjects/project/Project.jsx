import React, { useEffect } from 'react';
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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiWorld } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import { useStyles } from './ProjectStyles';


const Project = ({ title, intro, body, img, iconsTechUsed, links, links: { siteLive, repoURL } }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        // x: -1200,
        opacity: 0
      })
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}
      >
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
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ExpandMoreIcon />
                </motion.div>
              </IconButton>
            }
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{siteLive || repoURL ? 'Links' : 'No Links'}</Typography>
              {/* no siteLive icon will be displayed if there isn't a siteLive in the projectsList object file */}
              {siteLive &&
                <IconButton className={classes.linksIcons} aria-label='site live' target='_blank' href={siteLive}>
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}>
                    <BiWorld />
                  </motion.div>
                </IconButton>
              }
              {/* no github icon will be displayed if there isn't a repoURL in the projectsList object file */}
              {repoURL &&
                <IconButton className={classes.linksIcons} aria-label='repo url' target='_blank' href={repoURL}>
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <SiGithub />
                  </motion.div>
                </IconButton>
              }
            </CardContent>
          </Collapse>
        </Card>
      </motion.div>
    </div>
  );
}

export default Project;