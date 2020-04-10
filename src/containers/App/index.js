import React, { Suspense } from 'react';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
// components
import SimpleBackdrop from '../../components/SimpleBackdrop';

// application routes
import routes from '../../routes';

const App = () => {
  return (
    <Suspense fallback={<SimpleBackdrop delay={300} />}>
      <Router>
        <Switch>
          {routes.map((Route, i) =>
            (
              <Route.RouteComponent
                key={i}
                path={Route.path}
                exact={!!Route.exact}
              >
                <Route.Component />
              </Route.RouteComponent>
            )
          )}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
