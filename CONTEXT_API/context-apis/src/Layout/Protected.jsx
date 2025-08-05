import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = () => {
    const {user} = useUser();
    return(
        <>
        <div> {user?.name?.length ? <Outlet/> : <Navigate to="/" replace/> }</div>
        </>
    )
}
export default Protected;