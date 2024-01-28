import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  //dispatch is provided by react-redux which triggers 
  //the action and sent it to reducer so that the reducer performs 
  //the action which we have mention in the type.
  const dispatch = useDispatch();

  //when we use useSelector then react-redux automatically 
  //setup a subscription to redux store for this component so that the component will be updated
  // and recieve the latest counter automatically whenever that data changes in redux store.
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter)
  console.log(counter, showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', payload: 5 })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
