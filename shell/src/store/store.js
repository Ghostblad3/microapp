import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

/* -------- History -------- */
// Create a history object that will be used by connected-react-router
export const history = createBrowserHistory();

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

const createRootReducer = (history, asyncReducers) => {
  return combineReducers({
    ...staticReducers,
    router: connectRouter(history), // Use connectRouter to handle routing
    ...asyncReducers,
  });
};

/* -------- store -------- */

const middleware = [];

// Check if Redux DevTools are available in the browser
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ((f) => f); // Fallback if DevTools is not available

// Create the Redux store with the DevTools and any middlewares (if added later)
const store = createStore(
  createRootReducer(history, {}), // Pass in the history object and initial reducers
  composeEnhancers(applyMiddleware(...middleware)) // Apply middlewares and DevTools
);

/* keep track of injected reducers */
store.asyncReducers = {};

/* -------- injection API -------- */

const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer(history, store.asyncReducers));
};

export { store, injectReducer };
