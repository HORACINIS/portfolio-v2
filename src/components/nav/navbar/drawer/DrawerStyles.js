import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  active: {
    padding: 10,
    borderBottom: theme.palette.type === 'light' ? '#ffb300 solid 3px' : 'red solid 3px'
  }
}))