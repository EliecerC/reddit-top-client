import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listContainer: {
    flexShrink: 0,
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    position: 'relative',
  },
  listRoot: {
    width: '100%',
    whiteSpace: 'normal',
  },
  toolbar: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: '2',
    backgroundColor: theme.palette.background.secondary
  },
  toolbarBottom: {
    width: '100%',
    position: 'sticky',
    bottom: 0,
    zIndex: '2',
    backgroundColor: theme.palette.background.secondary
  },
  toolbarText: {
    width: 'inherit',
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    opacity: '0.3',
  },
  button: {
    height: '50px',
    width: '100%',
    margin: '0 auto',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    },
    '&[disabled]': {
      ...theme.button.disabled
    }
  }
}));