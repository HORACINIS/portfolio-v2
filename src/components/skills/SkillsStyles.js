import { makeStyles } from '@material-ui/core/styles';

// const lightThemeImg = 'url(https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80)';
// const lightThemeImg = 'url(https://images.unsplash.com/photo-1540577482853-167cc8e169e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80)';
const lightThemeImg = ''


const darkThemeImg = '';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: theme.palette.type === 'dark' ? darkThemeImg : lightThemeImg,
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
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // width: '100%',
    // minHeight: '50vh',
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
    background: theme.palette.type === 'dark' ? '' : 'black'
  }
}));