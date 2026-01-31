import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Layout } from '../layout/Layout.jsx';
import { routes } from './routes.js';

const AppRouter = () => {
  window.__REACT__ = React;

  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map(({ path, exact, Component }, i) => (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};

export { AppRouter };
