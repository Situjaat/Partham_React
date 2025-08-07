import { useDispatch } from "react-redux";
import {increment, decrement, reset} from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset())
  }
  return (
    <div>
      <button onClick={handleIncrease}> Increment</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
};

export default Dashboard;
