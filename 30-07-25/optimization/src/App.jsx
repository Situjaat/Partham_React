import { useState } from 'react'
import './App.css'
import MyComponent from './components/ReactMemo';
import { useCallback } from 'react';
import CallBackButton from './components/useCallback';
import UseMemoApp from './components/useMemo';
import React from "react"
import { Suspense } from 'react';


const LazyComponent = React.lazy(() => import ("./components/LazyComponent.jsx"));


const App =  () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("john");

  const handleclick = useCallback(() => {
    console.log("clicked");
    
  }, [])

  
  return (
    <>
      <h1> React.memo Example</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
           Increment {count}
        </button>
      </div>

      <div>
      <button onClick={() => setName("Jane")}> Change Name</button>
      <MyComponent name ={name}/>
      </div>
     

         <h1> CallBack Example</h1>

        <CallBackButton onclick2 = {handleclick}/>


        <UseMemoApp/>

   <h1> React.lazy Example</h1>

   <Suspense fallback = {<div> Loading...</div>}>
   <LazyComponent/>
   </Suspense>
   
</>

  
  )
}

export default App
