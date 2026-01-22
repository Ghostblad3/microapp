import React, { lazy } from 'react';
import { First } from './First';
import { Second } from './Second';
import { Default } from './Default';

const BASE_PATH = '/microfrontendA';

// const Default = lazy(() =>
//   import('./Default').then((module) => ({
//     default: module.Default,
//   }))
// );

// const First = lazy(() =>
//   import('./First').then((module) => ({
//     default: module.First,
//   }))
// );

// const Second = lazy(() =>
//   import('./Second').then((module) => ({
//     default: module.Second,
//   }))
// );

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
