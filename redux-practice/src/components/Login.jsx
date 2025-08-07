import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions";

const Login = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Onchange = (e) => {
        const {name, value} = e.target;
         setFormData({
            ...formData,
            [name] : value,
         })
    }
    
const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
        name:formData.username,
        username:"welcome bro"
    };
    dispatch(login(user))
    navigate("/dashboard");
    setFormData({
        username:"",
        password:""
    })
}
 
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label> Username:</label>
            <input type="text" name="username" value={formData.username} onChange={Onchange} />
            <label> Password:</label>
            <input type="password" name="password" value={formData.password} onChange={Onchange}/>
            <button> Login</button>
        </form>
        </>
    )
}

export default Login;