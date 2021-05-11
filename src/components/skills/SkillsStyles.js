import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    minHeight: '50vh',
  },
  mainTitle: {
    margin: '50px 0'
  },
  proficientTitle: {
    marginBottom: '100px'
  }
});