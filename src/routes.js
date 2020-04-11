import { Route } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';

const LazyTopEntriesPage = asyncComponent(() => import('./containers/TopEntriesPage'), 300);
const LazyPage404 = asyncComponent(() => import('./containers/Page404'), 300);

export default [
  {
    path: '/',
    exact: true,
    RouteComponent: Route,
    Component: LazyTopEntriesPage
  },
  {
    path: '*',
    Component: LazyPage404,
    RouteComponent: Route
  }
];
