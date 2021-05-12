import { makeStyles } from '@material-ui/core/styles';

// const lightThemeImg = 'url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80)';
// const lightThemeImg = 'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80)'
const lightThemeImg = 'url(https://images.unsplash.com/photo-1487260211189-670c54da558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)'

const darkThemeImg = 'url(https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2470&q=80)';

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
    // minHeight: '95vh',
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