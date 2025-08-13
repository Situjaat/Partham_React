import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/Actions/authActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === "admin" && password === "admin") {
        const user = {
            name:username,
            email:"situJaat@gmail.com",
        };
        dispatch(loginUser(user));
        navigate("/dashboard");
    } else {
        console.log("invalid credentials");
        setUsername("");
        setPassword('')
    }
   
  };

  return (
    <div>
        <h3> LogIn Form</h3>
      <form onSubmit={handleSubmit}>
        <label> Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label> Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button> Submit</button>
      </form>
    </div>
  );
};
export default Login;
