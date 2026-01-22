import { withRouter } from 'react-router-dom';
import styles from './styles/Component.module.css';

const BASE_PATH = '/microfrontendA';

const Menu = ({ history }) => {
  return (
    <div className={styles.menu}>
      <button onClick={() => history.push(`${BASE_PATH}/first`)}>First</button>
      <button onClick={() => history.push(`${BASE_PATH}/second`)}>
        Second
      </button>
    </div>
  );
};

const MenuWithRouter = withRouter(Menu);

export { MenuWithRouter as Menu };
