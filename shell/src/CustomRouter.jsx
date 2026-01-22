import { Component } from './Component.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { Shell } from './Shell.jsx';
// const MicroApp = lazy(() =>
//   import('rsbuild-microapp-js').then((mod) => ({
//     default: mod.app ?? mod.default,
//   }))
// );

import { injectReducer } from './store';

const MicrofrontendA = lazy(() =>
  import('microfrontendA').then((mod) => {
    if (mod.microfrontendAReducer) {
      injectReducer('microfrontendA', mod.microfrontendAReducer);
    }

    return {
      default: mod.app ?? mod.default,
    };
  })
);

const routes = [
  {
    path: '/',
    exact: true,
    Component: Component,
  },
  {
    path: '/microfrontendA',
    Component: MicrofrontendA,
  },
];

const CustomRouter = () => {
  window.__REACT__ = React;

  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <Router>
      <Shell>
        <Switch>
          {routes.map(({ path, exact, Component }, i) => (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={() => (
                <Suspense fallback={<div>Loading microfrontend…</div>}>
                  <Component />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </Shell>
    </Router>
  );
};

export { CustomRouter };
