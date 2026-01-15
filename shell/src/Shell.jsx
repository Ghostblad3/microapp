import { withRouter } from 'react-router-dom';
import styles from './shell.module.css';

function Shell({ history, children }) {
  return (
    <div className={styles.container}>
      <header>
        <div>Shell</div>
      </header>
      <main>
        <div className={styles.menu}>
          <div className={styles.menuItem} onClick={() => history.push('/')}>
            Shell
          </div>
          <div
            className={styles.menuItem}
            onClick={() => history.push('/microfrontend')}
          >
            Microapp
          </div>
        </div>
        <div className={styles.microAppBody}>
          <div className={styles.microAppBodyInternal}>{children}</div>
        </div>
      </main>
    </div>
  );
}

const routed = withRouter(Shell);
export { routed as Shell };
