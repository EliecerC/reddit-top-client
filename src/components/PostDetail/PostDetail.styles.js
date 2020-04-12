import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  container: {
    maxHeight: '100vh',
    overflowY: 'auto'
  },
  title: {
    color: theme.palette.primary.main,
  },
  image: {
    maxWidth: 'inherit',
    maxHeight: '80vh',
    minWidth: '300px'
  },
  divider: {
    margin: '20px 0',
    backgroundColor: theme.palette.primary.main
  }
}));