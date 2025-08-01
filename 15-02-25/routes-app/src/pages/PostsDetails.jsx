import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
const {postId} = useParams();
const [postDetails, setpostDetails] = useState();

const FetchPostDetails = async() => {
    try {
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const parseData = await response.json();
    setpostDetails(parseData);
    } catch(error) {
        console.log(error);
        
    }
}
useEffect(() =>{
    FetchPostDetails();
}, [postId])

    return (
        <div>
            <h2> Post Details :{postId} </h2>
      {postDetails? (<div> {postDetails.body} </div> ) : <div> Loading </div>}
        </div>
    )
}
export default PostDetails;