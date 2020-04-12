import React from 'react';
import { shallow } from 'enzyme';

import PostListItem from './index';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  shallow(<PostListItem post={{ id: 'mock_id' }} />);
});
