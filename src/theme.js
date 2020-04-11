import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#333333',      
    },
  },
  button: {
    disabled: {
      opacity: '0.5',
      color: '#ffffff',
    }
  }
});

export default theme;
