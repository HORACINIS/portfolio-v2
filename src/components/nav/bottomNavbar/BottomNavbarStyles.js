import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: theme.palette.type === 'light' ? '#f9a825' : 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
  },
  icons: {
    color: theme.palette.type === 'light' ? '#FFFFFF' : '#000000'
  },
}));
