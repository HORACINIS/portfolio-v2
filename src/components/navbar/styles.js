import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: 'linear-gradient(#56CCF2, #2F80ED)',
    background: '#ffbe0b',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#d90429'
  },
  title: {
    flexGrow: 1,
  },
}));