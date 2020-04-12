import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
// components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
// utils
import { displayDate } from '../../utils';
// styles
import useStyles from './PostListItem.styles';

function PostListItem(props) {
  const classes = useStyles();
  const [dismissed, setDismissed] = useState(false);
  const { post, read, onSelect, onDismiss, isSelected } = props;

  const handleSelectItem = useCallback((event) => {
    event.persist();
    onSelect && onSelect(post.id, event);
  }, [post, onSelect]);

  const handleDismiss = useCallback((event) => {
    event.persist();
    event.stopPropagation();

    setDismissed(true);
    setTimeout(() => {
      onDismiss && onDismiss(post.id, event);
    }, 400);
  }, [post, onDismiss]);

  return (
    <ListItem
      button
      key={post.id}
      alignItems="flex-start"
      onClick={handleSelectItem}
      className={clsx(
        classes.listItem, 
        { 'selected': isSelected }, 
        { 'dismiss-animation': dismissed },
      )}
    >
      {!read && <div className={classes.badge} />}

      <ListItemAvatar>
        <Avatar variant="rounded" alt={post.author} src={post.thumbnail} />
      </ListItemAvatar>

      <ListItemText
        classes={{ secondary: classes.listItemText }}
        primary={post.title}
        secondary={
          <>
            <Typography
              variant="body2"
              color="primary"
              component="span"
              className={classes.inline}
            >
              {post.author}
            </Typography>
            {' - '}{displayDate(post.created_utc)}
            <br />
            Comments: {post.num_comments}
          </>
        }
      />

      <IconButton 
        edge="end"
        size="small"
        color="secondary"
        title="dismiss"
        aria-label="dismiss"
        onClick={handleDismiss}
      >
        <RemoveCircleOutline />
      </IconButton>
    </ListItem>
  );
}

export default PostListItem;
