import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      main: '#f50057'
    }
  }
});
export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffb300',
      light: '#ffe54c',
      dark: '#c68400',
      constrastText: '#000000'
    }
  }
});