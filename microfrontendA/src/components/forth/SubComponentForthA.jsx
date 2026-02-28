import { withRouter } from 'react-router-dom';
import styles from './styles/SubComponentForthA.module.css';

const BASE_PATH = '/microfrontendA';

const SubComponentForthA = ({ history }) => {
  return (
    <div className={styles.nested}>
      SubComponentForthA
      <button
        onClick={() => history.push(`${BASE_PATH}/forth/subcomponentforthB`)}
      >
        Redirect to SubComponentForthB
      </button>
    </div>
  );
};

const SubComponentForthAWithRouter = withRouter(SubComponentForthA);

export { SubComponentForthAWithRouter as SubComponentForthA };
