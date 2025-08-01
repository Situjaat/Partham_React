import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    //try {
      // const response = await fetch("https://jsonplaceholder.typicode.com/users");
      // const parseData = await response.json();
      // setUsers(parseData);


 // axios data ko json me allready change karke deta hai 

  //       const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  //     console.log("response users", response);
  //     if(response.status === 200) {
  //     setUsers(response?.data)
  //     }
      
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  
  try {
  const postResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`,
    {
      title: "My Summer Vacation",
      body:" This is just learning axios with post method"
    }
  )
  console.log("postResponse", postResponse);
  setUsers(postResponse?.data)
} catch (error) {
  console.log(error);
  
}}
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App" style={{ margin: "40px 40px" }}>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => {
                navigate(`/users/${user.id}?userId=${user.id}`);
              }}
              style={{ cursor: "pointer", margin: "8px 0" }}
            >
              {user.username}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Users;
