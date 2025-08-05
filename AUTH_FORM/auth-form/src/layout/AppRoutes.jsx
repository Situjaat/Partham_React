import Home from "../pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import CreatePost from "../pages/CreatePost";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<Home/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/signup" element = {<Signup/>} />
            <Route path="/createpost" element = {<CreatePost/>} />
            <Route path="/post" element ={<Post/>} />
            <Route path="/*" element = {<NotFound/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRoutes;