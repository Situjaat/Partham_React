import { useState } from "react"

const useForm = (intialValue) => {
    const [values, setValues] = useState(intialValue ?? {});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prev) => ({...prev, [name] : value}))
    };

    const reset = () => [
        setValues(intialValue)
    ]
    
    return {values, handleChange, reset};
}

export default useForm;
