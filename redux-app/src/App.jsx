import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/actions";


function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1> Redux (Whitout Toolkit)</h1>
      <h2> Counter : {count}</h2>
      <button onClick={() => dispatch(increment())}> Increment</button> 
      <button onClick={() => dispatch(decrement())}> Decrement</button>
    </>
  )
}

export default App
