import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { AppRouter } from './router/AppRouter';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export { App };
