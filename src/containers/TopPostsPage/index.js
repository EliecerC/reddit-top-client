import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
// components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PostsList from '../../components/PostsList';
import PostDetail from '../../components/PostDetail';
// redux
import {
  setAsRead,
  dismissAll,
  dismissPost,
  fetchTopPosts,
} from '../../store/reducers/topPosts';
// styles
import useStyles from './TopPostsPage.styles';

function TopPostsPage(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  const {
    read,
    after,
    setAsRead,
    isLoading,
    topPosts,
    dismissAll,
    dismissPost,
    fetchTopPosts,
  } = props;

  useEffect(() => {
    if (!topPosts.length) {
      fetchTopPosts({ limit: 10 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = useCallback((_event) => {
    fetchTopPosts({ limit: 10, after });
  }, [after, fetchTopPosts]);

  const handleSelectPost = useCallback((id) => {
    const post = topPosts.find(post => post.data.id === id)
    setAsRead(id);
    setSelected(post.data);
  }, [setAsRead, topPosts]);

  const handleDismissPost = useCallback((id) => {
    dismissPost(id);
  }, [dismissPost]);

  const handleDismissAll = useCallback(() => {
    dismissAll();
  }, [dismissAll]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} lg={3}>
          <PostsList
            read={read}
            title="Reddit Top Posts"
            posts={topPosts}
            isLoading={isLoading}
            onSelect={handleSelectPost}
            onDismiss={handleDismissPost}
            handleLoadMore={handleLoadMore}
            handleDismissAll={handleDismissAll}
            selectedId={selected && selected.id}
          />
        </Grid>
        <Grid item xs={8} lg={9}>
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <PostDetail post={selected} />
            </Container>
          </main>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  read: state.topPosts.read,
  topPosts: state.topPosts.list,
  after: state.topPosts.paging.after,
  isLoading: state.topPosts.isLoading,
});

const actions = {
  setAsRead,
  dismissAll,
  dismissPost,
  fetchTopPosts
};

export default connect(mapStateToProps, actions)(TopPostsPage);
