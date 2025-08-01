import { useRef } from "react"

const UncontrolledForm = () => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        
    }
    return(
        <>
        <div>
            <h1> UnControlled Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={inputRef} />
                </div>
                <button type="submit">Save</button>

            </form>
        </div>
        </>
    )
}
export default UncontrolledForm;