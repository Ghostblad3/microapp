import { Provider } from 'react-redux';
import { store } from './store';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import { CustomRouter } from './CustomRouter.jsx';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <CustomRouter />
      </Provider>
    </ErrorBoundary>
  );
};

export { App };
