import { withRouter } from 'react-router-dom';
import styles from './styles/SubComponentB.module.css';

const BASE_PATH = '/microfrontendA';

const SubComponentB = ({ history }) => {
  return (
    <div className={styles.nested}>
      SubComponentB
      <button onClick={() => history.push(`${BASE_PATH}/third/subcomponentA`)}>
        Redirect to subroute A
      </button>
    </div>
  );
};

const SubComponentBWithRouter = withRouter(SubComponentB);

export { SubComponentBWithRouter as SubComponentB };
