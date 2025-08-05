
import { useUser } from "../context/UserContext";
import {Link, useNavigate} from "react-router-dom";
import Post from "./Post";
import { usePost } from "../context/PostContext";


const Dashboard = () => {
    const {user} = useUser();
    const { setPost} = usePost();
    const navigate=useNavigate()


    const FetchUser =  async () => {
        try {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
            console.log("response", response);
            const parseData = await response.json();
            console.log("parsedata", parseData);
            setPost(parseData);
        } catch (error) {
         console.log(error);
        }
    };
    
//  console.log(post);
 
    return(
        <>
        <div>
             <Link to="/">Home</Link> 
             <h1>Dashboard</h1>
            <h3> {user.name}</h3>
            <h6>{user.email}</h6> 
            <button onClick={()=> FetchUser()}> Get Post </button>
            <button onClick={()=> navigate("/secure/posts")}> post Data</button>
        </div>
        
        </>
    )
}

export default Dashboard;