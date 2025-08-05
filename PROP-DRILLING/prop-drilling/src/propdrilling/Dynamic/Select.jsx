import { useState } from "react";

const HOBBIES =[
    "Gyming",
    "Running",
    "Swiming",
    "Gardening",
    "Football"
]

const DynamicSelect = (props) => {
    
    const {setHobby} = props;

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        const {value} = e.target;
        setSelectedValue(value)
        setHobby(value)
    }
    // console.log("selectedValue", selectedValue);
    
    return(
        <>
        <select value={selectedValue} onChange={handleSelectChange} name="dynamic-select">
            <option value=""> Select hobby </option>
            {HOBBIES.map((hobby) => (
                <option key={hobby} value={hobby.toLowerCase()} > {hobby}</option>
            ))}
        </select>

        </>
    )
}

export default DynamicSelect;