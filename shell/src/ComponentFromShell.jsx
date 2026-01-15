import { useDispatch, useSelector } from 'react-redux';

const ComponentFromShell = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '3px solid forestgreen' }}>
      <h4>This Component is defined inside the shell application</h4>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
};

export { ComponentFromShell };
