import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";
import Protected from "./Protected";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {

    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>} />

    <Route path="/secure" element = {<Protected/>} >
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="posts" element = {<Post/>} />
    </Route>

    <Route path="*" element = {<NotFound/>} />
</Routes>
</BrowserRouter>
        </>
    )
}
export default AppRoutes;