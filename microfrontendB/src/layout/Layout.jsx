import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { MicrofrontendBRouter } from '../router/MicrofrontendBRouter';
import styles from './styles/Layout.module.css';

const Layout = ({ history }) => {
  useEffect(() => {
    if (history.location.pathname === '/microfrontendB/')
      history.replace('/microfrontendB/first');
  }, [history.location.pathname]);

  return (
    <div className={styles.inner}>
      <Menu />
      <div className={styles.routesWrapper}>
        <MicrofrontendBRouter />
      </div>
    </div>
  );
};

const LayoutWithRouter = withRouter(Layout);

export { LayoutWithRouter as Layout };
