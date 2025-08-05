import { useState } from "react"

const useCounter = (intialValue) =>{

    const [count, setCount] = useState(intialValue || 10);

    const increase = () => {
        setCount((count) => count + 1);
    }

    const decrease = () => {
        setCount((count) => count - 1);
    }

    const increaseByFive = () => {
        setCount((count) => count + 5)
    }

    const descreaseByFive = () => {
        setCount((count) => count - 5)
    }
return {count, increase, decrease, increaseByFive, descreaseByFive}

};


export default useCounter;