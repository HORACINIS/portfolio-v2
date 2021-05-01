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
    marginTop: 50,
    marginBottom: 130,
    verticalAlign: 'middle',
    filter: 'grayScale(90%)'
  },
  welcomeText: {
    marginBottom: 20,
    color: 'white'
  },
  introText: {
    color: 'white'
  },
  heroCoverIconsContainer: {
    color: 'rgb(219,18,18)',
    // marginTop: 130,
  },
  heroCoverIcons: {
    fontSize: 40
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