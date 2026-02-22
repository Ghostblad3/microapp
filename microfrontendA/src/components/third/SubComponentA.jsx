import { withRouter } from 'react-router-dom';
import styles from './styles/SubComponentA.module.css';

const BASE_PATH = '/microfrontendA';

const SubComponentA = ({ history }) => {
  return (
    <div className={styles.nested}>
      SubComponentA
      <button onClick={() => history.push(`${BASE_PATH}/third/subcomponentB`)}>
        Redirect to subroute B
      </button>
    </div>
  );
};

const SubComponentAWithRouter = withRouter(SubComponentA);

export { SubComponentAWithRouter as SubComponentA };
