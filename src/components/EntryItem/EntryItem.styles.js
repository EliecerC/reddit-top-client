import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    },
  },
  listItemText: {
    color: theme.palette.primary.main,
  },
  inline: {
    display: 'inline',
    fontWeight: '600',
  },
}));