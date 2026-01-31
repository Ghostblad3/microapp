import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const MicrofrontendBRouter = () => {
  return (
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
  );
};

export { MicrofrontendBRouter };
