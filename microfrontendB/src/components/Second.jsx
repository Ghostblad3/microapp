import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Second.module.css';

const Second = () => {
  const count = useSelector((state) => state.microfrontendB.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      Microfrontend B Component – references redux defined in the microfrontend
      <p>Count: {count}</p>
      <div className={styles.buttons}>
        <button
          onClick={() => dispatch({ type: 'INCREMENT_MICROFRONTEND_B_COUNT' })}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT_MICROFRONTEND_B_COUNT' })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export { Second };
