import React from 'react';
// components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// utils
import { displayDate } from '../../utils';
// styles
import useStyles from './EntryItem.styles';

function EntryItem(props) {
  const { data, onSelect } = props;
  const classes = useStyles();

  const handleSelectItem = (id) => (event) => {
    event.persist();
    onSelect && onSelect(id, event);
  };

  return (
    <ListItem
      button
      key={data.id}
      alignItems="flex-start"
      className={classes.listItem}
      onClick={handleSelectItem(data.id)}
    >
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
    </ListItem>
  );
}

export default EntryItem;
