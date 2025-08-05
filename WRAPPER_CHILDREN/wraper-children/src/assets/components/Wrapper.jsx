import { useState } from "react";
import {Outlet} from "react-router-dom";
const Wrapper = () => {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <>
<div>
    <h1>User Wraper</h1>
    {isAuth ? <Outlet/> : "Not a Authenticated User"}
</div>
        </>
    )
}

export default Wrapper;