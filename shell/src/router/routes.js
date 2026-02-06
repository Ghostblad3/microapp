import { lazy } from 'react';
import { injectReducer } from '../store/store.js';

const Component = lazy(() =>
  import('../components/Component.jsx').then(module => ({
    default: module.Component,
  }))
);

const MicrofrontendA = lazy(() =>
  import('microfrontendA').then((mod) => {
    if (mod.microfrontendAReducer) {
      injectReducer('microfrontendA', mod.microfrontendAReducer);
    }

    return {
      default: mod.app ?? mod.default,
    };
  })
);

const MicrofrontendB = lazy(() =>
  import('microfrontendB').then((mod) => {
    if (mod.microfrontendBReducer) {
      injectReducer('microfrontendB', mod.microfrontendBReducer);
    }

    return {
      default: mod.app ?? mod.default,
    };
  })
);

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
