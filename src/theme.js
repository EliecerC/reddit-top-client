import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ff9800',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#333333',
      secondary: 'rgba(0,0,0,1)',
      hover: 'rgba(0,0,0,0.3)',
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
