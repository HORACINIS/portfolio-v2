import { makeStyles } from '@material-ui/core/styles';

const lightImg = 'url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80)';
// const lightImg = 'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80)'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    // minHeight: '95vh',
    backgroundImage: lightImg,
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