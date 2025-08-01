import { useEffect, useState, useRef} from "react";

function Timer () {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000) ;
        return () => clearInterval(intervalRef.current)
    }, []);

    return (
        <div>
            <h1> Example 2: Persistent Timer (No Re-render)</h1>
            <h2> Timer :{seconds}</h2>
            <button onClick={() => clearInterval(intervalRef.current)}> Stop</button>
        </div>
    )
}

export default Timer;