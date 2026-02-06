import { withRouter } from 'react-router-dom';
import styles from './styles/Layout.module.css';
import { config as configA } from 'microfrontendA';
import { config as configB } from 'microfrontendB';

const Layout = ({ history, children }) => {
  const isInShell = history.location.pathname === '/';
  const isInMicrofrontendA =
    history.location.pathname.includes('microfrontendA') ;
  const isInMicrofrontendB =
    history.location.pathname.includes('/microfrontendB') ;

  const headerTitle = isInShell ? 'Shell'
    : isInMicrofrontendA
    ? configA
    : isInMicrofrontendB
    ? configB
    : 'Unknown';

  return (
    <div className={styles.container}>
      <header>
        <div>Repo: {headerTitle}</div>
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
              history.push('/microfrontendA/first');
            }}
          >
            Microfrontend A
          </div>
          <div
            className={`${styles.menuItem} ${
              isInMicrofrontendB ? styles.menuItemActive : ''
            }`}
            onClick={() => {
              history.push('/microfrontendB/first');
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

const LayoutWithRouter = withRouter(Layout);

export { LayoutWithRouter as Layout };
