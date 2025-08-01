import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Home = () => {
    const [user, setUser] = useState({});
    return(
        <>
        <ChildA heading="This is my prop from Home" userProps={user}/>
        <ChildB userDetails={user} setUserDetails={setUser} username={user.name}/>
        </>
    )
}
export default Home;