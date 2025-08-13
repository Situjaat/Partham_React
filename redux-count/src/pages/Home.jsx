import { useDispatch } from "react-redux";
import {increment, decrement, reset} from "../redux/Actions/actions";
import Count from "../components/Count";
import Dashboard from "../components/Dashboard";

const Home = () => {
 
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <Dashboard/>
      <button onClick={handleIncrease}> Increment </button>
      <button onClick={handleDecrease}> Decrease </button>
      <button onClick={handleReset}> Reset </button>
      <Count/>
    </div>
  
  );
};

export default Home;
