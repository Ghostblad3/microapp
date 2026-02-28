import { withRouter } from 'react-router-dom';
import styles from './styles/SubComponentForthB.module.css';

const BASE_PATH = '/microfrontendA';

const SubComponentForthB = ({ history }) => {
  return (
    <div className={styles.nested}>
      SubComponentForthB
      <button onClick={() => history.push(`${BASE_PATH}/forth`)}>
        Redirect to SubComponentForthA
      </button>
    </div>
  );
};

const SubComponentForthBWithRouter = withRouter(SubComponentForthB);

export { SubComponentForthBWithRouter as SubComponentForthB };
