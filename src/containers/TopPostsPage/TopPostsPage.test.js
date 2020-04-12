import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import TopPostsPage from './index';

const mockStore = { 
  getState: () => {}, 
  subscribe: () => {},
  dispatch: () => {},
};

/* eslint-disable no-undef */
it('renders without crashing', () => {
  shallow(
    <Provider store={mockStore}>
      <TopPostsPage />
    </Provider>
  );
});
