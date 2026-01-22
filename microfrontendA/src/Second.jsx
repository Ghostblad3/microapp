import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Component.module.css';

const Second = () => {
  const count = useSelector((state) => state.microfrontendA.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      Microfrontend 1 Component – references redux defined in the microfrontend
      <p>Count: {count}</p>
      <div className={styles.buttons}>
        <button onClick={() => dispatch({ type: 'INCREMENT_CHILD_COUNT' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT_CHILD_COUNT' })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export { Second };
