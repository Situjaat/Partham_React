import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux-files/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span> {count} </span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};
