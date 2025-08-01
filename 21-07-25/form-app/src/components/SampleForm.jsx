import { useState } from "react";

const SampleForm = () =>{
    const [form, setForm] = useState({
        userName:"",
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
        
    //     const { name, value } = e.target;
    // setForm((prevForm) => ({
    //   ...prevForm,
    //   [name]: value
    // }));
    }
    console.log("form data", form);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
        userName:"",
        email:"",
        password:""
    });
    }

return(
    <div>
        <h1> Sample Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>userName</label>
                <input type="text" name="userName" value={form.userName} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={form.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Paswword</label>
                <input type="text" name="password" value={form.password} onChange={handleChange}/>
            </div>
            <div>
                <button type="submit"> Save </button>
            </div>
        </form>
    </div>
)
}

export default SampleForm;