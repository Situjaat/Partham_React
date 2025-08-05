import { useState } from 'react'
import './App.css'
import Welcome from './componets/child'
import User from './componets/user'

function App() {
  const [user, setUser] = useState({});
   const [count, setCount] = useState(0);

  return (
    <>
   <h1>My Practice</h1>
   <Welcome count = {count}/>
   <button onClick={() =>setCount(count+1)}>Increase</button>
<button onClick={() =>setCount(count-1)}>Decrease</button>
<button onClick={() =>setCount(count)}></button>


   <User user={user}/>
   <button onClick={() =>setUser({name:"situ",age:28, gender:"male"})}>situ</button>
   <button onClick={() =>setUser({name:"jitu",age:26, gender:"male"})}>jitu</button>
   <button onClick={() =>setUser({name:"mitu",age:27, gender:"female"})}>mitu</button>
   
    </>
  )
}

export default App
