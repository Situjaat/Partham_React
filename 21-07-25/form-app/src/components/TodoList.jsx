import { useState } from "react";

const TodoList = () => {

    const INITIAL_FORM_DATA =   {  title:"",
        des:""
    }
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [todoList, setTodoList] = useState([]);
    const [error, setError] = useState([])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData ({
            ...formData,
            [name]: value
        })
    }

    const validate = () =>{
        const newError = {};
        if(!formData.title) newError.title = "title is required";
        if(!formData.des) newError.des = "des is required"
        return newError
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const validateError = validate();
        if(Object.keys(validateError).length> 0) {
           setError(validateError) 
        }else {
            setTodoList([...todoList, formData])
       setFormData(INITIAL_FORM_DATA);
       setError({});
        }
       
    }
    console.log(error);
    
    return(
        <>
        <div>
            <h1> Todos</h1>
            <form onSubmit={handleSubmit}>
            <div>
            <label> Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
            {error.title && <p style={{color:"red"}}> {error.title}</p> }
            </div>
            <div>
                <label> discreption</label>
                <input type="text" name="des" value={formData.des} onChange={handleChange} />
                {error.des && <p style={{color:"red"}}> {error.des} </p>}
            </div>
            <button type="submit"> Add</button>
           </form>

           {todoList.map((todo)=>{
            return(
                <div>
                    <ul >
                        <li>{todo.title}</li> 
                        <li>{todo.des}</li> 
                        </ul>
                         </div>
            )

           })} 
        </div>
        </>
    )
}

export default TodoList;