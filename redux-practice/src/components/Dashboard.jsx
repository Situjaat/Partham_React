import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions";

const Dashboard = () => {
    const user = useSelector((state) => state.auth?.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("call");

        dispatch(logout());
        navigate("/");
        
    }
    return (
        <>
       <h1>  welcome dashboard </h1>
       <p> {user?.name || "Geust"}</p>
       <button onClick={handleLogout}> Logout</button>
        </>
    )
}
export default Dashboard;