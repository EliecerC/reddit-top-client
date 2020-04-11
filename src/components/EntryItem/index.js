import React, { useCallback } from 'react';
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
import useStyles from './EntryItem.styles';

function EntryItem(props) {
  const { data, read, onSelect, onDismiss, isSelected } = props;
  const classes = useStyles();

  const handleSelectItem = useCallback((event) => {
    event.persist();
    onSelect && onSelect(data.id, event);
  }, [data, onSelect]);

  const handleDismiss = useCallback((event) => {
    event.persist();
    event.stopPropagation();
    onDismiss && onDismiss(data.id, event);
  }, [data, onDismiss]);

  return (
    <ListItem
      button
      key={data.id}
      alignItems="flex-start"
      onClick={handleSelectItem}
      className={clsx(classes.listItem, { 'selected': isSelected })}
    >
      {!read && <div className={classes.badge} />}

      <ListItemAvatar>
        <Avatar variant="rounded" alt={data.author} src={data.thumbnail} />
      </ListItemAvatar>

      <ListItemText
        classes={{ secondary: classes.listItemText }}
        primary={data.title}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              color="primary"
              className={classes.inline}
            >
              {data.author}
            </Typography>
            {' '}{displayDate(data.created_utc)}
          </>
        }
      />

      <IconButton 
        edge="end"
        size="small"
        color="primary"
        title="dismiss"
        aria-label="dismiss"
        onClick={handleDismiss}
      >
        <RemoveCircleOutline />
      </IconButton>
    </ListItem>
  );
}

export default EntryItem;
