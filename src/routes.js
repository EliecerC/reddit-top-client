import { Route } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';

const LazyHomePage = asyncComponent(() => import('./containers/HomePage'), 300);
const LazyPage404 = asyncComponent(() => import('./containers/Page404'), 300);

export default [
  {
    path: '/',
    exact: true,
    RouteComponent: Route,
    Component: LazyHomePage
  },
  {
    path: '*',
    Component: LazyPage404,
    RouteComponent: Route
  }
];
