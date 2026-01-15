import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.css';

const MicroApp = () => {
  return <Child />;
};

// Child component that uses Redux state
const Child = () => {
  // Accessing Redux state using useSelector hook
  const count = useSelector((state) => state.count);
  // Dispatch function to modify the state
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h4>Microfrontend Component</h4>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export { MicroApp };
