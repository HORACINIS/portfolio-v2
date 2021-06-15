import { makeStyles } from '@material-ui/core/styles';

const lightThemeImg = 'url(https://images.unsplash.com/photo-1586775490184-b79f0621891f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)';
const darkThemeImg = 'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80)';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: theme.palette.type === 'dark' ? darkThemeImg : lightThemeImg,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '95vh',
    padding: '10vh 0'
  },
  title: {
    fontSize: 50,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1.5px'
  },
  profilePic: {
    height: 200,
    width: 200,
    border: 'solid 2px #fff',
    borderRadius: '50%',
    marginTop: 80
  },
  textContent: {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    marginTop: '50px',
    backdropFilter: 'blur(6px)'
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '30px',
    letterSpacing: '1.5px'
  },
  bottomText: {
    fontSize: '17px',
  },
  resumeBtn: {
    marginTop: 30
  },
  showMoreBtn: {
    marginTop: 50,
  }
}));