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
    onDismiss,
    isLoading,
    selectedId,
    handleLoadMore,
    handleDismissAll
  } = props;
  const classes = useStyles();

  const handleSelectItem = (id, event) => {
    event.persist();
    onSelect && onSelect(id, event);
  };

  const handleDismissItem = (id, event) => {
    event.persist();
    onDismiss && onDismiss(id, event)
  }

  const getReadStatus = useCallback((id) => {
    const wasReaded = read.indexOf(id) > -1; 
    return wasReaded;
  }, [read]);

  const getButtonLabel = useCallback(() => {
    if (isLoading) return 'Loading...';
    if (!isLoading && !entries.length) return 'Load top entries';
    return 'Load more';
  }, [entries, isLoading]);

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
                onSelect={handleSelectItem} 
                onDismiss={handleDismissItem}
                read={getReadStatus(data.id)}
                isSelected={data.id === selectedId}
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

export default EntriesList;