import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: '#ffbe0b',
    background: theme.palette.type === 'light' ? '#f9a825' : 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    minHeight: '7vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.type === 'light' ? '#ffffff' : '#000000'
  },
  namePosition: {
    flexGrow: 1,
  },
  nameColour: {
    color: theme.palette.type === 'light' ? '#ffffff' : '#000000'
  },
}));