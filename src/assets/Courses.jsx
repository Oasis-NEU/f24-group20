import React from "react";
import Navigation from "./navigation";
import { Link } from "react-router-dom";
import oasisbg from "/oasisbg.png"


const Courses = () => {
    return(
    <>
    <div>
        <Link id= "logo-image" to= "/">
         <img src= {oasisbg} alt="PlaNUr Image" /> 
        </Link>
        <h1>Professor</h1>
    </div>
    </>
    );
}
export default Courses