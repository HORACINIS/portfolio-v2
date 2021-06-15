import { makeStyles } from '@material-ui/core/styles';
const lightThemeImg = '';
const darkThemeImg = 'url(https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2470&q=80)';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: theme.palette.type === 'dark' ? darkThemeImg : lightThemeImg,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // width: '100%',
    maxWidth: '100vw'
  },
  title: {
    margin: '50px 0'
  }
}));








// import { makeStyles } from '@material-ui/core/styles';

// export const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     width: '100%',
//     // minHeight: '95vh',
//     backgroundImage: 'url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80)',
//   },
//   title: {
//     margin: '50px 0'
//   }
// });