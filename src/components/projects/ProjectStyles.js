import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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