import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line no-unused-vars
const withAuth = (WrappedComponent) => {
    return function AuthenticatedComponent(props) {
        const [loading, setLoading] = useState(true);
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            const timer = setTimeout(() => {
                const loggedIn = localStorage.getItem("isLoggedIn") === "true";
                if(loggedIn) {
                    setIsAuthenticated(true);
                } else {
                    navigate("/login")
                }
                setLoading(false)
            },1000);

            return () => clearTimeout(timer)
        },[]);

        if (loading) return <p> Checking Authentication...</p>

        return isAuthenticated ? <WrappedComponent {...props} /> :null;
    }
}

export default withAuth;