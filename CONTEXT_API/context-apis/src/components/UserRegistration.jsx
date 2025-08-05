import { useState } from "react"
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const INTIAL_FORM_DATA = {
    name:"",
    email:""
}

const UserRegistration = () => {
    const{setUser} = useUser();
    const navigate = useNavigate()

    const [formData, setFormData] = useState(INTIAL_FORM_DATA);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] :value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...formData});
        setFormData(INTIAL_FORM_DATA);
        navigate("/secure/dashboard")
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange}/>

                <label> Email</label>
                <input name="email" value={formData.email} onChange={handleChange}/>

                <button type="submit"> Submit</button>

            </form>
        </div>
        </>
    )
}

export default UserRegistration