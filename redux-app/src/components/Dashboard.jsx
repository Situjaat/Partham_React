
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/Actions/authActions";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const [users, setUsers] = useState([]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        Welcome, {user?.name || "Guest"} to Dashboard
      </h1>
      <button onClick={handleLogout} className="btn btn-secondary mt-3">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

