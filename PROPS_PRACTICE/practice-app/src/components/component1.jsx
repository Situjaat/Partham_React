import { useEffect } from "react"

const Component1 = () => {

    useEffect(() => {
        return () => {
            console.log("unmount");    
        }
    }, [])
    return(
        <h1>
            Component 1 is On
        </h1>
    )
}

export default Component1