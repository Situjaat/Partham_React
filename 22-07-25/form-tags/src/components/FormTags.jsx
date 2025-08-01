import { useState } from "react";

const FormTags = () => {
    const [formData, setFormData] = useState({
        description:"",
        gender:"",
        shift:"",
        hobbies:[]
    })

    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSelectChange = (e) => {
        console.log(e);
        const{value, checked} = e.target;

        if(checked) {
            setFormData({
                ...formData,
                hobbies: [...formData.hobbies, value]
            })
        } else {
            const filterHobbies = formData.hobbies.filter((hobby) => hobby !== value);
            setFormData({
                ...formData,
                hobbies: filterHobbies
            })
        }
        
    }
    console.log(formData);
    
    return(
        <> 
        <div>
            <form>
                
                <label> Description</label>
                <textarea name="description" value={formData.description} onChange={handleFieldChange}></textarea>

                <div>
                    <label>Gender</label>
                    <select value={formData.gender} onChange={handleFieldChange} name="gender">
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select>
                </div>

                <div>
                    <label> Morning
                    <input type="radio" name="shift" value="morning" onChange={handleFieldChange}/>
                    </label>

                   <label> Evening
                    <input type="radio" name="shift" value="evening" onChange={handleFieldChange}/>
                    </label>
                </div>

                <div>
                    <span> Hobbies :</span>
                    <label> Music 
                        <input type="checkbox" value="music" checked={formData.hobbies.includes("music")} onChange={handleSelectChange}/>
        
                    </label>

                    <label> Gym 
                        <input type="checkbox" value="gym" checked={formData.hobbies.includes("gym")} onChange={handleSelectChange}/>
        
                    </label>

                    <label> Sports
                        <input type="checkbox" value="sports" checked={formData.hobbies.includes("sports")} onChange={handleSelectChange}/>
        
                    </label>


                </div>
            </form>
        </div>
        </>
    )
}

export default FormTags