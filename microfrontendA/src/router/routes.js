import { lazy } from 'react';
// import { First } from '../components/First';
// import { Second } from '../components/Second';
// import { Third } from '../components/third/Third';
// import { NestedComponent } from '../components/third/NestedComponent';

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

export { routes };
