import { useEffect, useRef, useState } from "react";

function PreviousValue() {
    const [count, setCount] =useState(0);
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <div>
            <h1> Example 3: previous Value Tracker</h1>
            <h2> Current: {count}</h2>
            <h3> Previous : {prevCount.current}</h3>
            <button onClick={() => setCount(c => c+1)}> Increment</button>
        </div>
    )
}

export default PreviousValue;