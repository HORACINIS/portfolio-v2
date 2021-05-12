import { makeStyles } from '@material-ui/core/styles';

const darkThemeImg = 'url(https://images.unsplash.com/photo-1508522802063-da3458d34254?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80)'

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: theme.palette.type === 'dark' && darkThemeImg,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  },
  listItems: {
    width: '160px',
    height: '90px',
  },
  avatar: {
    color: '#ffb300',
    background: '#000000'
  }
}));