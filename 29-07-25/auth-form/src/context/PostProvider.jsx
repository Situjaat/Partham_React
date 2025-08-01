import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext();

const PostProvider = ({children}) => {
const [postData, setPostData] = useState(()=> {
    const saved = localStorage.getItem("postData");
    return saved? JSON.parse(saved) : [];
});

useEffect(() => {
    if(postData?.length) {
        localStorage.setItem("postData", JSON.stringify(postData))
    }
}, [postData]);
return(
    <PostContext.Provider value={{postData, setPostData}}>
        {children}
    </PostContext.Provider>
)
}

export default PostProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const usePost = () => useContext(PostContext);