// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/Actions/countAction";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"


function App() {
  // const count = useSelector(state => state.count);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <h1> Redux (Whitout Toolkit)</h1>
      <h2> Counter : {count}</h2>
      <button onClick={() => dispatch(increment())}> Increment</button> 
      <button onClick={() => dispatch(decrement())}> Decrement</button> */}

      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
