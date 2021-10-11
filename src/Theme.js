import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f50057'
    }
  }
});
export const lightTheme = createTheme({
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