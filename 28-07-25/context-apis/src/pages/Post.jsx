import { usePost } from "../context/PostContext";

const Post = () => {

    const {post}  = usePost();
    console.log("post data ",post)

    return (
        <>
        {post?.map((p)=>{
          return(
            <div>
      <h3 id={p.id}>{p.title}</h3> 
            </div>
          )
        })}

    
    
        </>
    )
}

export default Post;