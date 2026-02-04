import { Menu } from '../components/Menu';
import styles from './styles/Layout.module.css';
import { MicrofrontendBRouter } from '../router/MicrofrontendBRouter';

const Layout = () => {
  return (
    <div className={styles.inner}>
      <Menu />
      <div className={styles.routesWrapper}>
        <MicrofrontendBRouter />
      </div>
    </div>
  );
};

export { Layout };
