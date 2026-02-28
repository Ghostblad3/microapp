import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Layout } from '../layout/Layout';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { routes } from './routes.js';
import { history } from '../store/store.js';

const Internal = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Switch>
          {routes.map(({ path, exact, Component }, i) => (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={() => (
                <Suspense fallback={<>Loading...</>}>
                  <Component />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </ErrorBoundary>
    </Layout>
  );
};

const AppRouter = () => {
  window.__REACT__ = React;

  const useBrowserRouter = false;

  return (
    <>
      {useBrowserRouter ? (
        <BrowserRouter>
          <Internal />
        </BrowserRouter>
      ) : (
        <ConnectedRouter history={history}>
          <Internal />
        </ConnectedRouter>
      )}
    </>
  );
};

export { AppRouter };
