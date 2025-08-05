import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(() =>{
       const savedUser = localStorage.getItem("userData");
       return savedUser ? JSON.parse(savedUser) : {name: "" , email:""}; 
});

    console.log("user", user);

    useEffect(() => {
        if(user?.name?.length)
            localStorage.setItem("userData", JSON.stringify(user))
    },[user]);
    
    return (
        <UserContext.Provider value={{user, setUser}}> 
            {children}
            </UserContext.Provider>
    )
}

export default UserProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);