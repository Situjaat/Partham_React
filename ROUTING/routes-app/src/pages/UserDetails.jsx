import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

const UserDetails = () => {
    const {id} = useParams();

    const [userDetails, setUserDetails] = useState();
    
    const fetchUserDetails = async() => {
        try{
            const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
            const parseResponse = await response.json();
            setUserDetails(parseResponse)
        } catch (error) {
console.log(error);

        }
    }
    useEffect(() => {
        if(id) {
            fetchUserDetails();
        }
    }, [id])
    console.log("userDetails", userDetails);
    return (
        <div>
        <h1>User of id : {id}</h1>    

        {userDetails ? (<><div> {userDetails?.username}</div>
        <div> {userDetails?.email}</div>
        </>) :(<> Loading...</>)}
        </div>
    )
}

export default UserDetails