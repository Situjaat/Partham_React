// import { useState } from "react";
// import { useUserList } from "../context/UserListProvider";
// import { useLogin } from "../context/LoginUserProvider";
// import { useNavigate } from "react-router-dom";

// const LOGIN_FORM_DATA = {
//     email:"",
//     password:""
// }
// const Login = () => {
//     const {userList} = useUserList();
//     const {setUserLogin} = useLogin();

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState(LOGIN_FORM_DATA);
//     const [message, setMessage] = useState("");

    
//     const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData({...formData,
//         [name]: value
//     })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const matchUser = userList.find(
//             (user) => 
//                 user.email === formData.email && 
//                 user.password === formData.password
//         );
//         if(matchUser) {
//             setMessage("Login succesfull!")
//             setUserLogin(matchUser);
//             navigate("/post")
//         } else {
//             setMessage(
//                 <span> User not found or wrong credentials please <button onClick={() => navigate("/signup")}> Sign up</button></span>
//             )
//         }
//         setFormData(LOGIN_FORM_DATA)
        
//     }
    
//     return (
//         <>
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label> Email</label>
//                 <input name="email" type="email" value={formData.email} onChange={handleChange}/>

//                 <label>Password</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange}/>

//                 <button type="submit"> Submit</button>
//             </form>
//             {message}
//         </div>
//         </>
//     )
// }
// export default Login;




import { useState } from "react";
import { useUserList } from "../context/UserListProvider";
import { useLogin } from "../context/LoginUserProvider";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const LOGIN_FORM_DATA = {
  email: "",
  password: "",
};

const Login = () => {
  const { userList } = useUserList();
  const { setUserLogin } = useLogin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(LOGIN_FORM_DATA);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchUser = userList.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchUser) {
      setMessage(
        <div className="alert alert-success mt-3">Login successful!</div>
      );
      setUserLogin(matchUser);
      navigate("/post");
    } else {
      setMessage(
        <div className="alert alert-danger mt-3">
          Invalid credentials.{" "}
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      );
    }

    setFormData(LOGIN_FORM_DATA);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
  <div className="card p-4 w-100 shadow" style={{ maxWidth: "400px" }}>
    <h3 className="text-center mb-4">Login</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>

    {/* Message Area */}
    <div className="mt-3">{message}</div>
  </div>
</div>

  );
};

export default Login;
