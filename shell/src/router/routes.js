import { lazy } from 'react';
import { injectReducer } from '../store/store.js';
import { config as configA } from 'microfrontendA';
import { config as configB } from 'microfrontendB';

const lazyWithMinDelay = (
  importFn,
  exportName,
  { minDelay, injectReducer, reducerName, key } = {
    minDelay: 200,
  }
) =>
  lazy(() => {
    const start = Date.now();

    return importFn().then(async (module) => {
      // Inject reducer if provided and exists
      if (injectReducer && reducerName && module[reducerName]) {
        injectReducer(key, module[reducerName]);
      }

      // Wait for minimum delay
      const elapsed = Date.now() - start;
      if (elapsed < minDelay) {
        await new Promise((r) => setTimeout(r, minDelay - elapsed));
      }

      return { default: module[exportName] };
    });
  });

const Component = lazyWithMinDelay(
  () => import('../components/Component'),
  'Component'
);

const MicrofrontendA = lazyWithMinDelay(() => import('microfrontendA'), 'app', {
  minDelay: 200,
  injectReducer,
  reducerName: 'microfrontendAReducer',
  key: configA,
});

const MicrofrontendB = lazyWithMinDelay(() => import('microfrontendB'), 'app', {
  minDelay: 200,
  injectReducer,
  reducerName: 'microfrontendBReducer',
  key: configB,
});

const routes = [
  {
    path: '/',
    exact: true,
    Component: Component,
  },
  {
    path: '/microfrontendA',
    Component: MicrofrontendA,
  },
  {
    path: '/microfrontendB',
    Component: MicrofrontendB,
  },
];

export { routes };
