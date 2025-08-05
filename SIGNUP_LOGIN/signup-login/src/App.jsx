import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  

  return (
    <>
     <BrowserRouter>
        <Link to="/"></Link>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} /> 
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App ;
