import React, { useCallback } from 'react';
// components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// styles
import useStyles from './EntryDetail.styles';

function EntryDetail(props) {
  const { entry } = props;
  const classes = useStyles();

  const renderContent = useCallback(() => {
    const extension = entry.url.split('.').slice(-1).shift();
    switch(extension) {
      case 'html':
        return <iframe title={entry.title} src={entry.url} />
      case 'gifv':
        return <img alt={entry.title} src={entry.url.replace('.gifv', '.gif')} />
      default: 
        return <img alt={entry.title} src={entry.url} />
    }
  }, [entry]);

  return (
    entry ?
      <Grid container spacing={3}>
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
          {entry.author}
        </Grid>
        
        <Grid item xs={12}>
          {renderContent()}
        </Grid>
      </Grid> :
      <Typography>
        Select an entry
      </Typography>
  );
}

export default EntryDetail;