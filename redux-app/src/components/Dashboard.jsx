import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/Actions/authActions";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("call");
        
        dispatch(logoutUser());
        navigate("/");
    }

    return(
        <div>
 <h1> Welcome,{user?.name || "Geust"} to Dashboard</h1>
 <button onClick={handleLogout}> Logout</button>
        </div>
    )
}
export default Dashboard;