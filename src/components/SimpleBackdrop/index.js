import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop(props) {
  const classes = useStyles();

  const { delay = 0 } = props;
  const [ready, setReady] = React.useState(delay === 0);

  React.useEffect(() => {
    let timeout = null;

    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready) return null;

  return (
    <Backdrop
      open={props.open}
      className={classes.backdrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}