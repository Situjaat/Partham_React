import './App.css'
import { useState } from 'react'
// import NameChangerClass from './components/ChangeNameClass/changeName'
// import CountChangerClass from './components/ClassCounter/counter'
 import Child from './components/childComponent'
function App() {
  
//     <>
//     <NameChangerClass/>
// <CountChangerClass/>
// </>

  const [count, setCount] = useState(0);
  const [pro, setPro] = useState(0);


  const handleChange = () => {
setCount(count+1);
setPro(pro+2)
  }

  return (
    <>
    <Child count={count} fgfg={pro}/>
      <div className="card">
        <button onClick={handleChange}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}


export default App

