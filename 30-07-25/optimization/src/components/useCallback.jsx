import React from "react";

const CallBackButton = React.memo (({ onClick2 }) => {
console.log("Button rendered");
return <button onClick={onClick2}> Click Me</button>


})

export default CallBackButton;