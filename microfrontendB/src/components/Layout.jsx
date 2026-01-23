import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { microfrontendBCustomRouter } from '../routes/routes';
import { Menu } from './Menu';
import styles from './styles/Layout.module.css';

const Layout = () => {
  const routes = microfrontendBCustomRouter();

  return (
    <div className={styles.inner}>
      <Menu />
      <div className={styles.routesWrapper}>
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
      </div>
    </div>
  );
};

export { Layout };
