import { useState } from "react"

const ControlledForm = () =>{

    const [name, setName] = useState();

    const handleChange = (e) =>{
        console.log(e.target.value); 
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setName("");
        console.log(name);
    }
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
           <h1> Controlled Form</h1>
          <input type="text" value ={name}  onChange={handleChange}/>
          <button type="submit"> Save</button>
            </form>
        </div>
        </>
    )
}
export default ControlledForm;