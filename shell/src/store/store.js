import { createStore, combineReducers } from 'redux';

/* -------- shell reducer -------- */

const initialShellState = { count: 0 };

const shellReducer = (state = initialShellState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

/* -------- reducer factory -------- */

const staticReducers = {
  shell: shellReducer,
};

const createRootReducer = (asyncReducers) => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
};

/* -------- store -------- */

const store = createStore(
  createRootReducer({}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* keep track of injected reducers */
store.asyncReducers = {};

/* -------- injection API -------- */

const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer(store.asyncReducers));
};

export { store, injectReducer };
