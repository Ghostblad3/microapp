import { Route, withRouter, Switch } from 'react-router-dom';
import styles from './styles/Third.module.css';

const Forth = ({ routes }) => {
  return (
    <div className={styles.container}>
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

export { Forth };
