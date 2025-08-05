import Card from './components/Card';
import './App.css'
import { useState } from 'react'
import Usercard from './components/userCard';
import Mount from './components/mount';
import Component1 from './components/component1';
import Component2 from './components/component2';

function App() {
  const [text, setText] = useState("sitaram");
  const [user, setUser] = useState ({});
  const [count, setCount] = useState (0);

  return (
    <>
        <div className='App'>
<Card text ={text} setText ={setText}/> 
<Usercard user ={user}/>
<button onClick={()=>setUser({name:"rohan", age:"25", gender:"male"})}>Rohan</button>
<button onClick={()=>setUser({name:"mohan", age:"27", gender:"female"})}>mohan</button>
<button onClick={()=>setUser({name:"sohan", age:"25", gender:"male"})}>Sohan</button>

    </div>

    <Mount/>
     <h1>count:{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={()=> setCount(count-1)}> Decrease</button>
    
    {count > 5 ? <Component1/> : <Component2/>}
    </>

    
  )  
}

export default App
