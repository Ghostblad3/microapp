import { lazy } from 'react';
// import { First } from '../components/First';
// import { Second } from '../components/Second';
// import { Default } from '../components/Default';

const BASE_PATH = '/microfrontendA';

const Default = lazy(() =>
  import('../components/Default').then((module) => ({
    default: module.Default,
  }))
);

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

const microfrontendACustomRouter = () => [
  {
    path: `${BASE_PATH}/`,
    exact: true,
    Component: Default,
  },
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

export { microfrontendACustomRouter };
