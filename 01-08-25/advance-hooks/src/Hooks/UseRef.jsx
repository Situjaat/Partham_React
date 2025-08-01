import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();  // Direct Dom mainpulation
    };

    return (
        <div>
            <h1> Example 1: Access DOM Node</h1>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}> Focus Input </button>
        </div>
    )
}

export default FocusInput;