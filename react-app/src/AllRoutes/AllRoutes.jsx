import { Route,Routes } from "react-router-dom";
import Home from "../AllPages/Home";
import About from "../AllPages/About";
import Contact from "../AllPages/Contact";
import Courses from "../AllPages/Courses";
import Scholarships from "../AllPages/Scholarships";
import Login from "../AllPages/Login";
import NotFound from "../AllPages/NotFound";
import SingleProduct from "../AllPages/SingleProduct";

function AllRoutes(){
    return <div>
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Courses" element={<Courses/>}></Route>
            <Route path="/Scholarships" element={<Scholarships/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Product/:id" element={<SingleProduct/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
       </Routes>
    </div>
}

export default AllRoutes