import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    },
    '&.selected': {
      backgroundColor: theme.palette.background.hover,
    }
  },
  listItemText: {
    color: theme.palette.primary.main,
  },
  inline: {
    display: 'inline',
    fontWeight: '600',
  },
  badge: {
    width: '10px',
    height: '10px',
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
    top: '10px',
    left: '10px',
    zIndex: 1,
  }
}));