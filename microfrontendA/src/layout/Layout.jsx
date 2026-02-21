import { Menu } from '../components/Menu';
import styles from './styles/Layout.module.css';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const BASE_PATH = '/microfrontendA';

const First = lazy(() =>
  import('../components/First').then((module) => ({
    default: module.First,
  }))
);

const Second = lazy(() =>
  import('../components/Second').then((module) => ({
    default: module.Second,
  }))
);

const Third = lazy(() =>
  import('../components/third/Third').then((module) => ({
    default: module.Third,
  }))
);

const NestedComponent = lazy(() =>
  import('../components/third/NestedComponent').then((module) => ({
    default: module.NestedComponent,
  }))
);

const routes = [
  {
    path: `${BASE_PATH}/first`,
    exact: true,
    Component: First,
  },
  {
    path: `${BASE_PATH}/second`,
    exact: true,
    Component: Second,
  },
  {
    path: `${BASE_PATH}/third`,
    Component: Third,
    routes: [
      {
        path: `${BASE_PATH}/third/subpage`,
        Component: NestedComponent,
      },
    ],
  },
];

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

const Layout = () => {
  console.log('works');

  return (
    <div className={styles.inner}>
      <Menu />
      <div className={styles.routesWrapper}>
        <MicrofrontendARouter />
      </div>
    </div>
  );
};

export { Layout };
