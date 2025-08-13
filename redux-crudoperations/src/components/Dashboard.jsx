import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/Actions/authAction";
import { useEffect, useState } from "react";
import { deleteUser, editUser, getUsers } from "../redux/Actions/userActions";

const Dashboard = () => {
  const logInUser = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user.userData);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [updateValue, setUpdatedValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const parseData = await response.json();
      dispatch(getUsers(parseData));
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

  const handleDelete = (index) => {
    const data = [...users];
    data.splice(index, 1);
    dispatch(deleteUser(data));
  };

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setUpdatedValue(users[index].name); // pre-fill with current name
  };

  const handleUpdate = () => {
    const data = [...users];
    data[selectedIndex].name = updateValue;
    dispatch(editUser(data));
    reset();
  };

  const reset = () => {
    setSelectedIndex(null);
    setUpdatedValue("");
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        Welcome, {logInUser?.name || "Guest"} to Dashboard
      </h1>

      {/* Inline edit input */}
      {selectedIndex !== null && users[selectedIndex] && (
        <div className="mb-3">
          <input
            type="text"
            value={updateValue}
            onChange={(e) => setUpdatedValue(e.target.value)}
            className="form-control"
          />
          <button className="btn btn-success mt-2" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn btn-secondary mt-2 ms-2" onClick={reset}>
            Cancel
          </button>
        </div>
      )}

      {/* Users list */}
      <div className="row">
        {users?.map((user, index) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title text-primary">{user.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text mb-1">
                  {user.address.street}, {user.address.suite}, {user.address.city}
                </p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
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
