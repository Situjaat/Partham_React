import { useEffect, useState } from "react";

const Mount = () => {

    const [count, setCount] =useState(0);
    const [value, setValue] = useState (5);

    useEffect(() => {
        console.log("Mounting");
    },[]);

    useEffect(() => { 
        console.log("Count is Changed", count);
        if(count > 5) setValue(55);
        else setValue(5)
    },[count]);

    useEffect(()=> {
        console.log(("value", value));
        
    },[value]);

    useEffect(() => {
        console.log("without dep. array");
        
    })
    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}> Increase count </button>
        <h1>Value : {value}</h1>
        <button onClick={() => setValue(value + 1)}>Increase value </button>
        </>
    )
}
export default Mount;