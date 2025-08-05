import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const FetchPost = async() => {
     try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const parseData = await response.json();
        setPosts(parseData);
        console.log(parseData);
        
    } catch (error) {
       console.log(error);
       
    }  
};
useEffect(() => {
    FetchPost();
},[])
    return (
        <div>
            <h6> List of Posts</h6>
  {posts?.map((post)=>{
    return (
    <ul>
        <li key={post.id}
        onClick={()=>{
            navigate(`/posts/${post.id}?postId=${post.id}`)
        }}
        >   
           {post.title} 
        </li>
    </ul>
 ) })}
        </div>
    )
}
export default Posts;