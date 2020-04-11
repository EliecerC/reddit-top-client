import React, { useEffect } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// components
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// redux
import { fetchTopEntries } from '../../store/reducers/topEntries';
// utils
import { displayDate } from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: theme.palette.primary.main,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listContainer: {
    width: 500,
    flexShrink: 0,
    maxHeight: '100vh',
    whiteSpace: 'normal',
    overflowY: 'auto',
  },
  listRoot: {
    width: '100%',
  },
  listItem: {
    color: theme.palette.primary.main,
  },
  inline: {
    display: 'inline',
    color: theme.palette.primary.main,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    height: '50px',
    width: '100%',
    margin: '0 auto',
    color: theme.palette.primary.main,
    '&:focus': {
      color: theme.palette.primary.main,
    },
    '&[disabled]': {
      ...theme.button.disabled
    }
  }
}));

function HomePage(props) {
  const classes = useStyles();
  const { after, topEntries, isLoading, fetchTopEntries } = props;

  useEffect(() => {
    if (!topEntries.length) {
      fetchTopEntries({ limit: 10 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    fetchTopEntries({ limit: 10, after })
  }

  return (
    <div className={classes.root}>
      <aside className={clsx(classes.listContainer)}>
        {/* TO DO: list loader */}
        {isLoading && 'loading...'}

        <List className={classes.listRoot}>
          {
            topEntries.map(({ data }) => (
              <>
                <ListItem key={data.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar variant="rounded" alt={data.author} src={data.thumbnail} />
                  </ListItemAvatar>
                  <ListItemText
                    classes={{ secondary: classes.listItem }}
                    primary={data.title}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                          className={classes.inline}
                        >
                          {data.author}
                        </Typography>
                        {' '}{displayDate(data.created_utc)}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="middle" component="li" classes={{ root: classes.divider }} />
              </>
            ))
          }
        </List>
        <Button 
          disabled={isLoading} 
          onClick={handleLoadMore}
          className={classes.button} 
        >
          Load more
        </Button>
      </aside>
      <div className={classes.content}>

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  topEntries: state.topEntries.list,
  after: state.topEntries.paging.after,
  isLoading: state.topEntries.isLoading,
});

export default connect(mapStateToProps, { fetchTopEntries })(HomePage);
