import { lazy } from 'react';
// import { First } from '../components/First';
// import { Second } from '../components/Second';

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
];

export { routes };
