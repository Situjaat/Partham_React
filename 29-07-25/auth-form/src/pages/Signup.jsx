// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserList } from "../context/UserListProvider";

// const FORM_INTIAL_DATA = {
//   firstname: "",
//   lastname: "",
//   email:"",
//   gender: "",
//   password: "",
//   confirmpassword: "",
// };
// const Signup = () => {
//   const navigate = useNavigate();
//   const {setUserList} = useUserList();

//   const [formData, setFormData] = useState(FORM_INTIAL_DATA);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//    setUserList((prev) => [...prev, formData]);
//    setFormData(FORM_INTIAL_DATA)
//    navigate("/login")
//   }
//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label> FirstName:</label>
//           <input
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//           />

//           <label> LastName:</label>
//           <input
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//           />
//          <label> Email:</label>
//          <input 
//          type="email"
//          name="email"
//          value={formData.email}
//          onChange={handleChange} />

//           <label> Gender :</label>
//           <label>Male</label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={formData.gender === "male"}
//             onChange={handleChange}
//           />
//           <label>Female</label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={formData.gender === "female"}
//             onChange={handleChange}
//           />

//           <label> Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <label> ConfirmPassword</label>
//           <input
//             type="password"
//             name="confirmpassword"
//             value={formData.confirmpassword}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" >
            
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserList } from "../context/UserListProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const FORM_INITIAL_DATA = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const { setUserList } = useUserList();

  const [formData, setFormData] = useState(FORM_INITIAL_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList((prev) => [...prev, formData]);
    setFormData(FORM_INITIAL_DATA);
    navigate("/login");
  };

  return (
    <div className="container mt-5 w-25">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Signup Form</h2>
        <form onSubmit={handleSubmit}>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter first name"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                id="male"
              />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                id="female"
              />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              className="form-control"
              placeholder="Re-enter password"
              required
            />
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;

