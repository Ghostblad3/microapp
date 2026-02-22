import { lazy } from 'react';
// import { First } from '../components/First';
// import { Second } from '../components/Second';
// import { Third } from '../components/third/Third';
// import { SubComponentA } from '../components/third/SubComponentA';
// import { SubComponentB } from '../components/third/SubComponentB';

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

const SubComponentA = lazy(() =>
  import('../components/third/SubComponentA').then((module) => ({
    default: module.SubComponentA,
  }))
);

const SubComponentB = lazy(() =>
  import('../components/third/SubComponentB').then((module) => ({
    default: module.SubComponentB,
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
        path: `${BASE_PATH}/third/subcomponentA`,
        Component: SubComponentA,
      },
      {
        path: `${BASE_PATH}/third/subcomponentB`,
        Component: SubComponentB,
      },
    ],
  },
];

export { routes };
