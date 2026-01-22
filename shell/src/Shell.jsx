import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './styles/shell.module.css';
import { config } from 'microfrontendA';

const Shell = ({ history, children }) => {
  const isInShell = history.location.pathname === '/';
  const isInMicrofrontendA = history.location.pathname === '/microfrontendA';

  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <div className={styles.container}>
      <header>{/* <div>Repo: {isInShell ? 'Shell' : config}</div> */}</header>
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
            Microfrontend 1
          </div>
        </div>
        <div className={styles.microFrontendBody}>{children}</div>
      </main>
    </div>
  );
};

const routed = withRouter(Shell);
export { routed as Shell };
