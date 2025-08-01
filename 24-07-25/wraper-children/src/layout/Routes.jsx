import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './pages/users';
import UserDetails from './pages/userDetails';
import Posts from './pages/Posts';
import PostDetails from './pages/PostsDetails';

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <nav className='w-50 m-auto d-flex justify-content-around p-3'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link> 
          <Link to = "/posts"> Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/users" element={<Wrapper/>} >
          <Route path="" element={<Users />} /> 
          <Route path=":id" element={<UserDetails />} /> 
          <Route path="create" element={<CreateUser/>} />
          
          </Route>

          <Route path='/posts' element = {<Posts/>} />
          <Route path='/posts/:postId' element ={<PostDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;

