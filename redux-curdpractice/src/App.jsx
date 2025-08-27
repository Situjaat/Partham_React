import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/user/:id" element={<UserDetails/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
