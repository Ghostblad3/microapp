import { Provider } from 'react-redux';
import { store } from './store';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';
import { AppRouter } from './router/AppRouter.jsx';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ErrorBoundary>
  );
};

export { App };
