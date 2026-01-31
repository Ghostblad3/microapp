import { Menu } from '../components/Menu';
import styles from './styles/Layout.module.css';
import { MicrofrontendARouter } from '../router/MicrofrontendARouter';

const Layout = () => {
  return (
    <div className={styles.inner}>
      <Menu />
      <div className={styles.routesWrapper}>
        <MicrofrontendARouter />
      </div>
    </div>
  );
};

export { Layout };
