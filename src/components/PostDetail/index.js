import React, { useCallback } from 'react';
// components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// styles
import useStyles from './PostDetail.styles';
import { displayDate } from '../../utils';

function PostDetail(props) {
  const { post } = props;
  const classes = useStyles();

  const renderContent = useCallback(() => {
    let src = '';
    const extension = post.url.split('.').slice(-1).shift();

    switch(extension) {
      case 'gifv':
        src = post.url.replace('.gifv', '.gif')
        break;
      case 'gif':
      case 'jpg':
      case 'png':
      case 'jpge':
        src = post.url;
        break;
      default: 
        src = post.thumbnail;
    }

    return <img className={classes.image} alt={post.title} src={src} />;
  }, [post, classes]);

  return (
    <Grid container className={classes.container}>
      {
        post ?
          <>
            <Grid item xs={12} md={8} lg={9}>
              <Typography
                align="center"
                component="h2"
                color="primary"
                classes={{ root: classes.title }}
              >
                {post.title}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Typography align="center" color="secondary">
                {post.author} - {displayDate(post.created_utc)}
              </Typography> 
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" classes={{ root: classes.divider }} />
            </Grid>

            <Grid item xs={12}>
              {renderContent()}
            </Grid> 

            <Grid item xs={12}>
              {post.num_comments} comments on this post
            </Grid> 
          </> :
          <Grid item xs={12}>
            <Typography align="center" color="secondary">
              Select a post
            </Typography>
          </Grid>
      }
    </Grid> 
  );
}

export default PostDetail;