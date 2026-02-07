import { withRouter } from 'react-router-dom';
import styles from './styles/Menu.module.css';

const BASE_PATH = '/microfrontendA';

const Menu = ({ history }) => {
  const isFirstPage = history.location.pathname.includes(`${BASE_PATH}/first`);
  const isSecondPage = history.location.pathname.includes(
    `${BASE_PATH}/second`
  );
  const isThirdPage = history.location.pathname.includes(`${BASE_PATH}/third`);

  return (
    <div className={styles.menu}>
      <div
        className={`${styles.button} ${isFirstPage ? styles.buttonSelected : ''}`}
        onClick={() => history.push(`${BASE_PATH}/first`)}
      >
        First
      </div>
      <div
        className={`${styles.button} ${isSecondPage ? styles.buttonSelected : ''}`}
        onClick={() => history.push(`${BASE_PATH}/second`)}
      >
        Second
      </div>
      <div
        className={`${styles.button} ${isThirdPage ? styles.buttonSelected : ''}`}
        onClick={() => history.push(`${BASE_PATH}/third`)}
      >
        Third
      </div>
    </div>
  );
};

const MenuWithRouter = withRouter(Menu);

export { MenuWithRouter as Menu };
