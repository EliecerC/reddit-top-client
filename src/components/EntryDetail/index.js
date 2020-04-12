import React, { useCallback } from 'react';
// components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// styles
import useStyles from './EntryDetail.styles';
import { displayDate } from '../../utils';

function EntryDetail(props) {
  const { entry } = props;
  const classes = useStyles();

  const renderContent = useCallback(() => {
    let src = '';
    const extension = entry.url.split('.').slice(-1).shift();

    switch(extension) {
      case 'gifv':
        src = entry.url.replace('.gifv', '.gif')
        break;
      case 'gif':
      case 'jpg':
      case 'png':
      case 'jpge':
        src = entry.url;
        break;
      default: 
        src = entry.thumbnail;
    }

    return <img className={classes.image} alt={entry.title} src={src} />;
  }, [entry, classes]);

  return (
    <Grid container className={classes.container}>
      {
        entry ?
          <>
            <Grid item xs={12} md={8} lg={9}>
              <Typography
                align="center"
                component="h2"
                color="primary"
                classes={{ root: classes.title }}
              >
                {entry.title}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Typography align="center" color="secondary">
                {entry.author} - {displayDate(entry.created_utc)}
              </Typography> 
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" classes={{ root: classes.divider }} />
            </Grid>

            <Grid item xs={12}>
              {renderContent()}
            </Grid> 

            <Grid item xs={12}>
              {entry.num_comments} comments on this post
            </Grid> 
          </> :
          <Grid item xs={12}>
            <Typography align="center" color="secondary">
              Select an entry
            </Typography>
          </Grid>
      }
    </Grid> 
  );
}

export default EntryDetail;