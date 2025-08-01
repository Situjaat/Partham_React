// import {Link, useNavigate} from "react-router-dom";

// const Home = () => {
//     const navigate = useNavigate();
//     return(
//         <>
//         <h1> Home </h1>
//         <button onClick={()=> navigate("/login")} >LogIn </button>
//         <button onClick={()=> navigate("/signup")}> Sign Up</button>
//         </>
//     )
// }
// export default Home;



import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 m-auto">
      <div className="text-center">
        <h1 className="mb-4 text-primary">Welcome to the App</h1>
        <p className="mb-4 text-secondary">Please log in or sign up to continue.</p>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-primary px-4"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
