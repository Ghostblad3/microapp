import { withRouter } from 'react-router-dom';
import styles from './styles/Layout.module.css';
import { config as configA } from 'microfrontendA';
import { config as configB } from 'microfrontendB';

const Layout = ({ history, children }) => {
  const isInShell = history.location.pathname === '/' && 'Shell';
  const isInMicrofrontendA =
    history.location.pathname.includes('microfrontendA') && configA;
  const isInMicrofrontendB =
    history.location.pathname.includes('/microfrontendB') && configB;

  return (
    <div className={styles.container}>
      <header>
        <div>Repo: {isInShell || isInMicrofrontendA || isInMicrofrontendB}</div>
      </header>
      <main>
        <div className={styles.menu}>
          <div
            className={`${styles.menuItem} ${
              isInShell ? styles.menuItemActive : ''
            }`}
            onClick={() => {
              history.push('/');
            }}
          >
            Shell
          </div>
          <div
            className={`${styles.menuItem} ${
              isInMicrofrontendA ? styles.menuItemActive : ''
            }`}
            onClick={() => {
              history.push('/microfrontendA');
            }}
          >
            Microfrontend A
          </div>
          <div
            className={`${styles.menuItem} ${
              isInMicrofrontendB ? styles.menuItemActive : ''
            }`}
            onClick={() => {
              history.push('/microfrontendB');
            }}
          >
            Microfrontend B
          </div>
        </div>
        <div className={styles.microFrontendBody}>{children}</div>
      </main>
    </div>
  );
};

const routed = withRouter(Layout);
export { routed as Layout };
