import { lazy } from 'react';
// import { First } from '../components/First';
// import { Second } from '../components/Second';
// import { Third } from '../components/third/Third';
// import { SubComponentA } from '../components/third/SubComponentA';
// import { SubComponentB } from '../components/third/SubComponentB';
// import { Forth } from '../components/forth/Forth';
// import { SubComponentForthA } from '../components/forth/SubComponentForthA';
// import { SubComponentForthB } from '../components/forth/SubComponentForthB';

const BASE_PATH = '/microfrontendA';

const lazyWithMinDelay = (importFn, exportName, minDelay = 200) =>
  lazy(() => {
    const start = Date.now();

    return importFn().then(async (module) => {
      // Wait for minimum delay
      const elapsed = Date.now() - start;
      if (elapsed < minDelay) {
        await new Promise((r) => setTimeout(r, minDelay - elapsed));
      }

      return { default: module[exportName] };
    });
  });

const First = lazyWithMinDelay(() => import('../components/First'), 'First');

const Second = lazyWithMinDelay(() => import('../components/Second'), 'Second');

const Third = lazyWithMinDelay(
  () => import('../components/third/Third'),
  'Third'
);

const SubComponentA = lazyWithMinDelay(
  () => import('../components/third/SubComponentA'),
  'SubComponentA'
);

const SubComponentB = lazyWithMinDelay(
  () => import('../components/third/SubComponentB'),
  'SubComponentB'
);

const Forth = lazyWithMinDelay(
  () => import('../components/forth/Forth'),
  'Forth'
);

const SubComponentForthA = lazyWithMinDelay(
  () => import('../components/forth/SubComponentForthA'),
  'SubComponentForthA'
);

const SubComponentForthB = lazyWithMinDelay(
  () => import('../components/forth/SubComponentForthB'),
  'SubComponentForthB'
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
        exact: true,
      },
      {
        path: `${BASE_PATH}/third/subcomponentB`,
        Component: SubComponentB,
        exact: true,
      },
    ],
  },
  {
    path: `${BASE_PATH}/forth`,
    Component: Forth,
    routes: [
      {
        path: `${BASE_PATH}/forth`,
        Component: SubComponentForthA,
        exact: true,
      },
      {
        path: `${BASE_PATH}/forth/subcomponentforthB`,
        Component: SubComponentForthB,
        exact: true,
      },
    ],
  },
];

export { routes };
