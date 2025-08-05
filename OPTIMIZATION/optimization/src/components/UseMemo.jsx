import { useMemo } from "react";
import { useState } from "react";

const computeHeavyTask = (num, type) => {
    console.log("computing heavy task", type);
    let total = 0;
    for (let i = 0; i < 1e7; i++){
        total+= num * Math.random();
    }
     return Math.round(total);
}

// Component Without useMemo 

function WithoutMemo ({input}) {
    const result = computeHeavyTask(input, "Without useMemo");
    return <p> <strong> Without useMemo:</strong> {result} </p>;
}

// Component with useMemo 
function WithMemo ({input}) {
    console.log("with useMemo called");

    const result = useMemo(() => computeHeavyTask(input, "with useMemo"), [input]);
    return <p><strong> With useMemo:</strong> {result}</p>
    
}

function UseMemoApp() {
    const [input, setInput] = useState(5);
    const [count, setCount] = useState(0);

    return (
        <>
          <h2> useMemo Performance Demo</h2>

        <label> Input: <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
        </label>

        <div style={{marginTop: "20px"}}>
            <WithoutMemo input={input}/>
            <WithMemo input={input}/>
        </div>

        <button onClick={() => setCount((prev) => prev + 1)} style={{marginTop:"20px"}}>
   Re-render App (count = {count})
        </button>
        </>
      
    )
}

export default UseMemoApp;