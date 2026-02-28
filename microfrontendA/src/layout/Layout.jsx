import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { MicrofrontendARouter } from '../router/MicrofrontendARouter';
import { Menu } from '../components/Menu';
import styles from './styles/Layout.module.css';

const Layout = ({ history }) => {
  useEffect(() => {
    if (history.location.pathname === '/microfrontendA/')
      history.replace('/microfrontendA/first');
  }, [history.location.pathname]);

  return (
    <div className={styles.inner}>
      <Menu />
      <div className={styles.routesWrapper}>
        <MicrofrontendARouter />
      </div>
    </div>
  );
};

const LayoutWithRouter = withRouter(Layout);

export { LayoutWithRouter as Layout };
