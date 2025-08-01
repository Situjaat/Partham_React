import { useState } from "react";
import DynamicSelect from "./Select";

const HomeSelect = () => {

    const [formData, setFormData] = useState({
        name:"",
        gender:"",
        hobby:""
    })

    const handleFormSubmit = () => {

    }
    console.log("formData", formData);
    
    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <input/>
            <input type="radio"/>
            <DynamicSelect setHobby={(updatedHobby) => setFormData ({
                ...formData,
                hobby:updatedHobby
            })} />

        </form>
        </>
    )
}

export default HomeSelect;