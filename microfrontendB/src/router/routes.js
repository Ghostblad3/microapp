import { lazy } from 'react';
// import { First } from '../components/First';
// import { Second } from '../components/Second';
// import { Third } from '../components/third/Third';
// import { NestedComponent } from '../components/third/NestedComponent';

const BASE_PATH = '/microfrontendB';

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

const NestedComponent = lazyWithMinDelay(
  () => import('../components/third/NestedComponent'),
  'NestedComponent'
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
        exact: true,
      },
    ],
  },
];

export { routes };
