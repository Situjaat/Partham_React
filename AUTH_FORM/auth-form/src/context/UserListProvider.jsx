import { createContext, useContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserListContext = createContext();

const ListProvider = ({children}) => {
    const [userList, setUserList] = useState(()=> {
        const savedPost = localStorage.getItem("UserList");
        return savedPost ? JSON.parse(savedPost) :[] ;
    });

    useEffect(() => {
        if(userList?.length) {
            localStorage.setItem("UserList", JSON.stringify(userList))
        }
    }, [userList]);

    return(
        <UserListContext.Provider value={{userList, setUserList}}>
            {children}
        </UserListContext.Provider>
    )
}

export default ListProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useUserList = () => useContext(UserListContext);