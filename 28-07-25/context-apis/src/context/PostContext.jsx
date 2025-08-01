import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [post, setPost] = useState(() => {
    const savedPost = localStorage.getItem("PostsData");
    return savedPost ? JSON.parse(savedPost) : [];
  });

  useEffect(() => {
    if (post?.length) {
      localStorage.setItem("PostsData", JSON.stringify(post));
    }
  }, [post]);

return (
    <PostContext.Provider value={{post, setPost}}>
        {children}
    </PostContext.Provider>
)
}

export default PostProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const usePost = () => useContext(PostContext);



