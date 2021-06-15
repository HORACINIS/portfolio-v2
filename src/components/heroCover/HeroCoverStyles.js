import { makeStyles } from '@material-ui/core/styles';
const lightThemeImg = 'url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80)';
const darkThemeImg = 'url(https://images.unsplash.com/photo-1449156733864-dd5471bb7427?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)';

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
  },
  heroCoverIcons: {
    fontSize: 40,
    color: theme.palette.type === 'light' ? 'rgb(219,18,18)' : '#ffb300',
  }
}));