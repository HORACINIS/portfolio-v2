import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15vh',
    margin: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    filter: 'grayScale(90%)'
  }

  // welcomeText: {
  //   color: 'purple',
  //   fontSize: '10vw',
  // },
  // introText: {
  //   fontSize: '8vw'
  // }

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