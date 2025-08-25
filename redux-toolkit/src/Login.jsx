import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux-files/authSlice";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const userData = await response.json();
      dispatch(login(userData)); // save user in redux
      console.log("Response:", userData);

      // reset form
      setFormData({ username: "", password: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {isAuthenticated ? (
        <>
          <h2>Welcome, {user?.username} 👋</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
            <div style={{ marginBottom: "10px" }}>
              <label> Username </label> <br />
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter username"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label> Password </label> <br />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter password"
              />
            </div>

            <button type="submit"> Submit </button>
          </form>
        </>
      )}
    </div>
  );
};
