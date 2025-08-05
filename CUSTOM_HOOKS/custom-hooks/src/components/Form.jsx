
import useForm from "../customHooks/useForm"

const Forms = () => {
    const {values, handleChange, reset} = useForm({firstname:"", lastname:"", gender:""});

console.log(values);

    return (
        <>
        <div>
            <form>
                 <label> Name:</label>
            <input value={values.firstname} name="firstname" onChange={handleChange}/>
            <input value={values.lastname} name="lastname" onChange={handleChange}/>
            <label> Gender:</label>
           <label>Male </label> < input name="gender" type="radio" value="male" onChange={handleChange} checked={values.gender === "male"}/>
            <label>Female </label>< input name="gender" type="radio" value="female" onChange={handleChange} checked={values.gender === "female"}/>
  
            <button type="submit"> Submit</button>
            <button onClick={reset}>Reset</button>
             
            </form>
           
        </div>
        </>
    )


}
export default Forms;





