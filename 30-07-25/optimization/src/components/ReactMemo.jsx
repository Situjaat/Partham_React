import React from "react";


const MyComponent = React.memo(({name})=> {
    console.log("my component Renderd");

    return <p> Hello , {name}</p>
    
})

export default MyComponent;