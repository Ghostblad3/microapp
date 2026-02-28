import { Route, withRouter, Switch } from 'react-router-dom';
import styles from './styles/Third.module.css';

const BASE_PATH = '/microfrontendB';

const Third = ({ history, routes }) => {
  const shouldShowRedirectToSubPageButton = history.location.pathname.endsWith(
    `${BASE_PATH}/third`
  );

  return (
    <div className={styles.container}>
      Microfrontend B Component - Wraps subroutes
      {shouldShowRedirectToSubPageButton ? (
        <button onClick={() => history.push(`${BASE_PATH}/third/subpage`)}>
          Redirect to subroute
        </button>
      ) : (
        <button onClick={() => history.push(`${BASE_PATH}/third`)}>
          Redirect to parent route
        </button>
      )}
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
