import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Component.module.css';

const First = () => {
  const count = useSelector((state) => state.shell.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      Microfrontend 1 Component – references redux defined in the shell
      <p>Count: {count}</p>
      <div className={styles.buttons}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export { First };
