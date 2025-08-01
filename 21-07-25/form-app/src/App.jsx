import './App.css'
import ControlledForm from './components/ControlledForm'
import Form from './components/Forms'
import SampleForm from './components/SampleForm'
import TodoList from './components/TodoList'
import UncontrolledForm from './components/UncontrolledForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
 
  return (
    <>
   <BrowserRouter>
   <Link to="/todolist">TodoList</Link>
   <Link to= "/form" > Form </Link>
   <Routes>
    <Route path="/todolist" element={<TodoList/>} />
    <Route path='/form' element = {<Form/>} />
   </Routes>
   </BrowserRouter>
     <div>
      {/* <ControlledForm/>
      <UncontrolledForm/>
      <SampleForm/> */}
    </div>
    </>
   
  )
}

export default App
