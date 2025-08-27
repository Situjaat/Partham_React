import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, editUser } from "../actions/userAction"; 
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const users = useSelector((state) => state.user.userData);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [updateValue, setUpdatedValue] = useState("");

  const dispatch = useDispatch();
const navigate = useNavigate();
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

  
  const handleDelete = (index) => {
    const data = [...users];
    data.splice(index, 1);
    dispatch(deleteUser(data));
  };

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setUpdatedValue(users[index].name);
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
    <>
     <div className="container mt-4 ">
      <h2 className="m-4 text-center text-primary"> Users Dashboard</h2>
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

<div className="container mt-4">
  <div className="row g-4">
    {users?.map((user, index) => (
      <div
        className="col-lg-3 col-md-4 col-sm-6 mb-4"
        key={user.id}
        onClick={() => navigate(`/user/${user.id}`)}
      >
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h4 className="card-title text-primary">{user.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
            <p className="card-text">
              {user.address.street}, {user.address.suite}, {user.address.city}
            </p>

            <div className="d-flex gap-2">
              <button
                className="btn  btn-warning btn-sm flex-fill"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(index);
                }}
              >
                ✏️ Edit
              </button>
              <button
                className="btn btn-secondary btn-sm flex-fill"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</div>
    </>
  );
};

export default Dashboard;












