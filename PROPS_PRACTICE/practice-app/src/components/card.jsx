import { useState } from "react";
const Card = (props) => {

    const {text, setText} = props;

    const [color, setColor] = useState("#0000FF");
    
    const handleColorChange = () => {
        setColor ( color ===  "#A020F0" ? "#0000FF" : "#A020F0")
    }
    return (
        <>
           <div style={{width:"300px", height:"200px", border: "1px solid black", background:color}}>
            <div> {text} </div>
            <button onClick={() => setColor(color === "#A020F0" ? "#0000FF" : "#A020F0")}> Change Color</button>
            <button style={{display:"block"}} onClick={handleColorChange}> Change Color</button>
       <button onClick={() => setText(text === "sitaram" ? "suresh" :"sitaram")}> Text Change </button>
        </div>
  </>
     
    )
}

export default Card;