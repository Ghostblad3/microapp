import { Component } from './Component.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { Shell } from './Shell.jsx';
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

const MicrofrontendB = lazy(() =>
  import('microfrontendB').then((mod) => {
    if (mod.microfrontendBReducer) {
      injectReducer('microfrontendB', mod.microfrontendBReducer);
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
  {
    path: '/microfrontendB',
    Component: MicrofrontendB,
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
