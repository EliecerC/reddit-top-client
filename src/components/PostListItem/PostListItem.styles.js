import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listItem: {
    position: 'relative',
    left: 0,
    transition: 'left .4s linear 4ms',
    overflow: 'hidden',
    '&.dismiss-animation': {
      position: 'absolute',
      left: '-100%'
    },
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
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: 1,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
  }
}));