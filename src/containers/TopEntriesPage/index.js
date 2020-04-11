import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
// components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EntriesList from '../../components/EntriesList';
import EntryDetail from '../../components/EntryDetail';
// redux
import {
  setAsRead,
  dismissAll,
  fetchTopEntries,
} from '../../store/reducers/topEntries';
// styles
import useStyles from './TopEntriesPage.styles';

function TopEntriesPage(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  const {
    read,
    after,
    setAsRead,
    isLoading,
    topEntries,
    dismissAll,
    fetchTopEntries,
  } = props;

  useEffect(() => {
    if (!topEntries.length) {
      fetchTopEntries({ limit: 10 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = useCallback((_event) => {
    fetchTopEntries({ limit: 10, after });
  }, [after, fetchTopEntries]);

  const handleSelectEntry = useCallback((id) => {
    const entry = topEntries.find(entry => entry.data.id === id)
    setAsRead(id);
    setSelected(entry.data);
  }, [setAsRead, topEntries]);

  const handleDismissAll = useCallback(() => {
    dismissAll();
  }, [dismissAll]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <EntriesList
            read={read}
            entries={topEntries}
            isLoading={isLoading}
            onSelect={handleSelectEntry}
            handleLoadMore={handleLoadMore}
            handleDismissAll={handleDismissAll}
          />
        </Grid>
        <Grid item xs={9}>
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <EntryDetail entry={selected} />
            </Container>
          </main>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  read: state.topEntries.read,
  topEntries: state.topEntries.list,
  after: state.topEntries.paging.after,
  isLoading: state.topEntries.isLoading,
});

const actions = {
  setAsRead,
  dismissAll,
  fetchTopEntries
};

export default connect(mapStateToProps, actions)(TopEntriesPage);
