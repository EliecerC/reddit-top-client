import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import PostsList from './index';

const mockTheme = createMuiTheme({ button: {} });

/* eslint-disable no-undef */
it('renders without crashing', () => {
  const redditPosts = [
    {
      data: {
        id: 'mock_id',
      }
    }
  ];

  shallow(
    <ThemeProvider theme={mockTheme}>
      <PostsList posts={redditPosts} />
    </ThemeProvider>
  );
});
