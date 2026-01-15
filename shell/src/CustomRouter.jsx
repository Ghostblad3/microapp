import { ComponentFromShell } from './ComponentFromShell.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Shell } from './Shell.jsx';
import { app as MicroApp } from 'rsbuild-microapp-js';

const customRouter = [
  {
    path: '/',
    exact: true,
    Component: <ComponentFromShell />,
  },
  {
    path: '/microfrontend',
    exact: true,
    Component: <MicroApp />,
  },
];

function CustomRouter() {
  return (
    <Router>
      <Switch>
        {customRouter.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={() => <Shell>{route.Component}</Shell>}
          />
        ))}
      </Switch>
    </Router>
  );
}

export { CustomRouter };
