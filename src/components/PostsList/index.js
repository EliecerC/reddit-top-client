import React, { useCallback } from 'react';
import clsx from 'clsx';
// components
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PostListItem from '../PostListItem';
// styles
import useStyles from './PostsList.styles';

function PostsList(props) {
  const {
    read,
    title,
    posts,
    onSelect,
    onDismiss,
    isLoading,
    selectedId,
    handleLoadMore,
    handleDismissAll
  } = props;
  const classes = useStyles();

  const handleSelectItem = useCallback((id, event) => {
    event.persist();
    onSelect && onSelect(id, event);
  }, [onSelect]);

  const handleDismissItem = useCallback((id, event) => {
    event.persist();
    onDismiss && onDismiss(id, event)
  }, [onDismiss]);

  const getReadStatus = useCallback((id) => {
    const wasReaded = read.indexOf(id) > -1; 
    return wasReaded;
  }, [read]);

  const getButtonLabel = useCallback(() => {
    if (isLoading) return 'Loading...';
    if (!isLoading && !posts.length) return 'Load top posts';
    return 'Load more';
  }, [posts, isLoading]);

  return (
    <aside className={clsx(classes.listContainer)}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <Typography
          align="center"
          component="h4"
          color="primary"
          classes={{ root: classes.toolbarText }}
        >
          {title}
        </Typography>
      </Toolbar>

      <List className={classes.listRoot}>
        {
          posts.map(({ data: post }) => (
            <React.Fragment key={post.id}>
              <PostListItem
                post={post}
                onSelect={handleSelectItem} 
                onDismiss={handleDismissItem}
                read={getReadStatus(post.id)}
                isSelected={post.id === selectedId}
              />
              <Divider
                component="li" 
                variant="middle" 
                classes={{ root: classes.divider }} 
              />
            </React.Fragment>
          ))
        }
        <Button
          color="secondary"
          disabled={isLoading}
          onClick={handleLoadMore}
          className={classes.button}
        >
          {getButtonLabel()}
        </Button>
      </List>

      <Toolbar variant="dense" classes={{ root: classes.toolbarBottom }}>
        <Button
          color="secondary"
          onClick={handleDismissAll}
          className={classes.button}
        >
          Dismiss all
        </Button>
      </Toolbar>
    </aside>
  );
}

export default PostsList;