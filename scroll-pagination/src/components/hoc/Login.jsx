import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("isLoggeIn", "true");
        navigate("/dashboard");
    }

    return (
        <div>
            <h2> Log in page</h2>
            <button onClick={handleLogin}> LogIn </button>
        </div>
    )
}
export default Login;