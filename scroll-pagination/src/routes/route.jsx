import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "..//components/Home";
import Products1 from "..//components/Products1";
import Products from "../components/Products";
import Login from "../components/hoc/Login";
import Dashboard from "../components/hoc/Dashboard";
  

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
      <h3> WelCome Dummy Api Page</h3>
      <Link to="/products1">Go to Products</Link> <br></br>
      <Link to = "/products" >Second Method of Product Scroll</Link>
     
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/products1" element={<Products1 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
