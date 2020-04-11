import React, { useCallback } from 'react';
import clsx from 'clsx';
// components
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EntryItem from '../EntryItem';
// styles
import useStyles from './EntriesList.styles';

function EntriesList(props) {
  const {
    read,
    entries,
    onSelect,
    isLoading,
    handleLoadMore,
    handleDismissAll
  } = props;
  const classes = useStyles();

  const handleSelectItem = (id, event) => {
    event.persist();
    onSelect && onSelect(id, event);
  };

  const getReadStatus = useCallback((id) => {
    const wasReaded = read.indexOf(id) > -1; 
    return wasReaded;
  }, [read])

  return (
    <aside className={clsx(classes.listContainer)}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <Typography
          align="center"
          component="h4"
          color="primary"
          classes={{ root: classes.toolbarText }}
        >
          Reddit Top Posts
        </Typography>
      </Toolbar>

      <List className={classes.listRoot}>
        {
          entries.map(({ data }) => (
            <>
              <EntryItem 
                data={data}
                read={getReadStatus(data.id)}
                onSelect={handleSelectItem} 
              />
              <Divider component="li" variant="middle" classes={{ root: classes.divider }} />
            </>
          ))
        }
        <Button
          disabled={isLoading}
          onClick={handleLoadMore}
          className={classes.button}
        >
          Load more
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

export default EntriesList;