import { makeStyles } from '@material-ui/core/styles';

const lightThemeImg = 'url(https://images.unsplash.com/photo-1586775490184-b79f0621891f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)';
// const lightThemeImg = 'url(https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80)'

const darkThemeImg = 'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80)';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: theme.palette.type === 'dark' ? darkThemeImg : lightThemeImg,
    // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1580408485028-225972105876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2610&q=80)',
    // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)',
    // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2557&q=80)',
    // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1600478822888-e3d96cdc8ae2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',

    // color: 'white',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // width: '100%',
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
    // marginTop: 80,
    height: 200,
    width: 200,
    border: 'solid 2px #fff',
    borderRadius: '50%',
    // marginTop: '60px',
    marginTop: 80
  },
  textContent: {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    // fontSize: '2vh',
    marginTop: '50px',
    // backdropFilter: theme.palette.type === 'light' && 'blur(6px)'
    backdropFilter: 'blur(6px)'
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '30px',
    // marginTop: '30px',
    letterSpacing: '1.5px'
  },
  bottomText: {
    fontSize: '17px',
  },
  showMoreBtn: {
    marginTop: 20,
  }
}));