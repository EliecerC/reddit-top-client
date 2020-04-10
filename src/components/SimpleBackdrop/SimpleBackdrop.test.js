import React from 'react';
import renderer from 'react-test-renderer';
import SimpleBackdrop from './index';

/* eslint-disable no-undef */
it('renders without crashing', () => {
  // snapshot
  const simpleBackdrop = renderer.create(<SimpleBackdrop open={false} />).toJSON();
  expect(simpleBackdrop).toMatchSnapshot();
});