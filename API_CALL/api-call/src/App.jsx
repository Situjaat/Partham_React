import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    try {
      // const response = await fetch ("https://jsonplaceholder.typicode.com/users");
      // console.log("response", response);
      // const parseData = await response.json();
      // console.log("parseData", parseData);
      // setUsers(parseData);  // save data in state


      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log("response users", response);
      setUsers(response.data)
    } catch (error) {
      console.log("error", error); 
    }
  };
  
  useEffect(() => {
    fetchUser()
  },[]);
  return (
    <>
      <div className='app'>
 <h1>Username</h1>
      <ul>
        {users?.map((user) => (
          <div> 
     <li key={user.id}>{user.name}</li>
     <h3>{user.username}</h3>
     <h6>{user.email}</h6>
          </div>  
        ))}
      </ul>

      </div>
      
    </>
  )
}

export default App
