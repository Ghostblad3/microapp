import { Route, withRouter, Switch } from 'react-router-dom';
import styles from './styles/Third.module.css';

const BASE_PATH = '/microfrontendA';

const Third = ({ history, routes }) => {
  return (
    <div className={styles.container}>
      Microfrontend A Component - Wraps subroutes
      <button onClick={() => history.push(`${BASE_PATH}/third/subcomponentA`)}>
        Redirect to subroute A
      </button>
      <button onClick={() => history.push(`${BASE_PATH}/third/subcomponentB`)}>
        Redirect to subroute B
      </button>
      <button onClick={() => history.push(`${BASE_PATH}/third`)}>
        Redirect to parent route
      </button>
      <div>
        {routes && (
          <Switch>
            {routes.map(({ path, exact, Component }, i) => (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={() => <Component />}
              />
            ))}
          </Switch>
        )}
      </div>
    </div>
  );
};

const ThirdWithRouter = withRouter(Third);

export { ThirdWithRouter as Third };
