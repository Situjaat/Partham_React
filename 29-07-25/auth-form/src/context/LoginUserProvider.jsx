import { useContext, useEffect, } from "react";
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(()=> {
    const savePost = localStorage.getItem("LogInUser");
    return savePost ? JSON.parse(savePost): null;
  })

  useEffect(() => {
    if(userLogin)
      localStorage.setItem("LogInUser", JSON.stringify(userLogin))
  }, [userLogin]);
 

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useLogin = () => useContext(UserContext);
