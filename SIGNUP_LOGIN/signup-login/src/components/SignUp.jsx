// import { useState } from "react";
// import "./SignUp.css";

// const SignUp = () => {
//   const FORM_INITIAL_DATA = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     gender: "",
//     age: "",
//     password: "",
//     confirmpassword: "",
//     shift: "",
//     hobbies: [], 
//   };

//   const [formData, setFormData] = useState(FORM_INITIAL_DATA);
//   const [error, setError] = useState([]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSelectChange = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       setFormData({
//         ...formData,
//         hobbies: [...formData.hobbies, value],
//       });
//     } else {
//       const filterHobbies = formData.hobbies.filter((hobby) => hobby !== value);
//       setFormData({
//         ...formData,
//         hobbies: filterHobbies,
//       });
//     }
//   };

//   const validate = ()=> {
//     const newError = {};
//     if(!formData.firstname) newError.firstname ="firstname is required";
//     if(!formData.lastname) newError.lastname = "lastname is required";
//     if(!formData.email) newError.email = "email is required";
//     if(!formData.password) newError.password = "password is required";
//     if(!formData.confirmpassword) newError.confirmpassword = "confirmpassword is required";
//     if(!formData.age) newError.age = "age is required";
    
//     return newError
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validateError = validate();
//     if(Object.keys(validateError).length>0) {
//         setError(validateError)
//     }else {
//  console.log("Form Submitted:", formData);
//     setFormData(FORM_INITIAL_DATA);  // Reset form
//     }
   
//   };

//   return (
//     <div>
//       <h1>SignUp Form</h1>
//       <form onSubmit={handleSubmit}>


//              <label>First Name</label>
//         <input
//           name="firstname"
//           type="text"
//           value={formData.firstname}
//           onChange={handleFormChange}
//         />
//        {error.firstname && <p style={{color:"red"}}> {error.firstname} </p>}
           
//   <label>Last Name</label>
//         <input
//           name="lastname"
//           type="text"
//           value={formData.lastname}
//           onChange={handleFormChange}
//         />
//         {error.lastname && <p style={{color:"red"}}> {error.lastname} </p>}
       
      
//         <br />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleFormChange}
//         />

//         <label>Gender</label>
//         <select name="gender" value={formData.gender} onChange={handleFormChange}>
//           <option value="">Select</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         <br />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleFormChange}
//         />

//         <label>Confirm Password</label>
//         <input
//           type="password"
//           name="confirmpassword"
//           value={formData.confirmpassword}
//           onChange={handleFormChange}
//         />
//         <br />

//         <label>Age</label>
//         <input
//           type="date"
//           name="age"
//           value={formData.age}
//           onChange={handleFormChange}
//         />

//         <label>Role:</label>
//         <label>
//           Admin
//           <input
//             type="radio"
//             name="shift"
//             value="admin"
//             checked={formData.shift === "admin"}
//             onChange={handleFormChange}
//           />
//         </label>

//         <label>
//           Manager
//           <input
//             type="radio"
//             name="shift"
//             value="manager"
//             checked={formData.shift === "manager"}
//             onChange={handleFormChange}
//           />
//         </label>

//         <label>
//           Viewer
//           <input
//             type="radio"
//             name="shift"
//             value="viewer"
//             checked={formData.shift === "viewer"}
//             onChange={handleFormChange}
//           />
//         </label>
//         <br />

//         <span>Interests:</span>
//         <label>
//           Music
//           <input
//             type="checkbox"
//             value="music"
//             checked={formData.hobbies.includes("music")}
//             onChange={handleSelectChange}
//           />
//         </label>

//         <label>
//           Gym
//           <input
//             type="checkbox"
//             value="gym"
//             checked={formData.hobbies.includes("gym")}
//             onChange={handleSelectChange}
//           />
//         </label>

//         <label>
//           Sports
//           <input
//             type="checkbox"
//             value="sports"
//             checked={formData.hobbies.includes("sports")}
//             onChange={handleSelectChange}
//           />
//         </label>

//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;



import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const FORM_INITIAL_DATA = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    age: "",
    password: "",
    confirmpassword: "",
    shift: "",
    hobbies: [],
  };

  const [formData, setFormData] = useState(FORM_INITIAL_DATA);
  const [error, setError] = useState({});
   const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, value],
      });
    } else {
      const filterHobbies = formData.hobbies.filter((hobby) => hobby !== value);
      setFormData({
        ...formData,
        hobbies: filterHobbies,
      });
    }
  };

  const validate = () => {
    const newError = {};
    if (!formData.firstname) newError.firstname = "First name is required";
    if (!formData.lastname) newError.lastname = "Last name is required";
    if (!formData.email) newError.email = "Email is required";
    if (!formData.gender) newError.gender = "Gender is required";
    if (!formData.age) newError.age = "Age is required";
    if (!formData.password) newError.password = "Password is required";
    if (!formData.confirmpassword) {
      newError.confirmpassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmpassword) {
      newError.confirmpassword = "Passwords do not match";
    }
    if (!formData.shift) newError.shift = "Role is required";
    if (formData.hobbies.length === 0) newError.hobbies = "Select at least one interest";
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      console.log("✅ Form Submitted:", formData);
      setFormData(FORM_INITIAL_DATA);
      setError({});
    }
  };

  return (
    <div>
      <h1>SignUp Form</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label>First Name</label>
        <input
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={handleFormChange}
        />
        {error.firstname && <p style={{ color: "red" }}>{error.firstname}</p>}

        {/* Last Name */}
        <label>Last Name</label>
        <input
          name="lastname"
          type="text"
          value={formData.lastname}
          onChange={handleFormChange}
        />
        {error.lastname && <p style={{ color: "red" }}>{error.lastname}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

        {/* Gender */}
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleFormChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleFormChange}
        />
        {error.confirmpassword && <p style={{ color: "red" }}>{error.confirmpassword}</p>}

        {/* Age */}
        <label>Age</label>
        <input
          type="date"
          name="age"
          value={formData.age}
          onChange={handleFormChange}
        />
        {error.age && <p style={{ color: "red" }}>{error.age}</p>}

        {/* Role */}
        <label>Role:</label>
        <label>
          <input
            type="radio"
            name="shift"
            value="admin"
            checked={formData.shift === "admin"}
            onChange={handleFormChange}
          />{" "}
          Admin
        </label>

        <label>
          <input
            type="radio"
            name="shift"
            value="manager"
            checked={formData.shift === "manager"}
            onChange={handleFormChange}
          />{" "}
          Manager
        </label>

        <label>
          <input
            type="radio"
            name="shift"
            value="viewer"
            checked={formData.shift === "viewer"}
            onChange={handleFormChange}
          />{" "}
          Viewer
        </label>
        {error.shift && <p style={{ color: "red" }}>{error.shift}</p>}

        {/* Interests */}
        <span>Interests:</span>
        <label>
          <input
            type="checkbox"
            value="music"
            checked={formData.hobbies.includes("music")}
            onChange={handleSelectChange}
          />{" "}
          Music
        </label>

        <label>
          <input
            type="checkbox"
            value="gym"
            checked={formData.hobbies.includes("gym")}
            onChange={handleSelectChange}
          />{" "}
          Gym
        </label>

        <label>
          <input
            type="checkbox"
            value="sports"
            checked={formData.hobbies.includes("sports")}
            onChange={handleSelectChange}
          />{" "}
          Sports
        </label>
        {error.hobbies && <p style={{ color: "red" }}>{error.hobbies}</p>}

        {/* Submit */}
        <br />
        <button type="submit"onClick={() => navigate("/dashboard")}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;





