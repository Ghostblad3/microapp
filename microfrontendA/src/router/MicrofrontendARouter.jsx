import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const MicrofrontendARouter = () => {
  return (
    <Switch>
      {routes.map(({ path, exact, Component, routes }, i) => (
        <Route
          key={i}
          path={path}
          exact={exact}
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Component routes={routes} />
            </Suspense>
          )}
        />
      ))}
    </Switch>
  );
};

export { MicrofrontendARouter };
