import { makeStyles } from '@material-ui/core/styles';

const lightThemeImg = 'url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80)';
// const lightImg =  'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.75)), '

// const darkThemeImg = 'url(https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)';
// const darkThemeImg = 'url(https://images.unsplash.com/photo-1464667831196-208f4be2592e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80)';
const darkThemeImg = 'url(https://images.unsplash.com/photo-1449156733864-dd5471bb7427?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)';



export const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: '80vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: '15vh',
  //   margin: theme.spacing(1),
  // },
  root: {
    backgroundImage: theme.palette.type === 'dark' ? darkThemeImg : lightThemeImg,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // marginTop: '-50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    minHeight: '94vh',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 130,
    marginBottom: 70,
    verticalAlign: 'middle',
    filter: 'grayScale(90%)'
  },
  welcomeText: {
    marginBottom: 20,
    // color: 'white'
  },
  introText: {
    // color: 'white'
  },
  // heroCoverIconsContainer: {
  //   color: theme.palette.type === 'light' ? 'rgb(219,18,18)' : '#ffb300',
  //   // marginTop: 130,
  // },
  heroCoverIcons: {
    fontSize: 40,
    color: theme.palette.type === 'light' ? 'rgb(219,18,18)' : '#ffb300',
  }
}))




// const useStyles = makeStyles(() => ({
//   // textContainer: {
//   //   marginTop: '10vh',
//   //   minHeight: '85vh',
//   //   height: '80vh',
//   //   width: '100vw',
//   //   maxHeight: '100vh'
//   // },
//   // welcomeText: {
//   //   color: 'purple',
//   //   fontSize: '10vw',
//   // },
//   // introText: {
//   //   fontSize: '8vw'
//   // }
//   textContainer: {
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// }))