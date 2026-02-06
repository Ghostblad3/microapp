import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Component.module.css';

const Component = () => {
  const count = useSelector((state) => state.shell.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.component}>
      This Component is defined inside the shell application - it references the
      counter redux state defined in the shell
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

export { Component };
