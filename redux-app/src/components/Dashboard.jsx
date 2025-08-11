// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../redux/Actions/authActions";
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const user = useSelector((state) => state.auth.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [users, setUsers] = useState([]);

//   const fetchUser = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       console.log("response", response);
//       const parseData = await response.json();
//       console.log("parseData", parseData);
//       setUsers(parseData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const handleLogout = () => {
//     console.log("call");

//     dispatch(logoutUser());
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1> Welcome,{user?.name || "Geust"} to Dashboard</h1>

//       <div>
//         {users?.map((user) => (
//           <div>
//             <h3 key={user.id}> {user.name}</h3>
//             <h4> {user.email}</h4>
//             <h5>{user.address.street}</h5>
//             <h5> {user.address.suite}</h5>
//             <h5> {user.address.city}</h5>
//             <button> Edit</button>
//             <button> Delete</button>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleLogout}> Logout</button>
//     </div>
//   );
// };
// export default Dashboard;




import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/Actions/authActions";
import { useEffect } from "react";
import { getUsers } from "../redux/Actions/userActions";

const Dashboard = () => {
  const users = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const parseData = await response.json();
      dispatch(getUsers(parseData))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        Welcome, {users?.name || "Guest"} to Dashboard
      </h1>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title text-primary">{user.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text mb-1">
                   {user.address.street}
                   {user.address.suite}
                   {user.address.city}    
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleLogout} className="btn btn-secondary mt-3">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

