import React from "react";
import Navigation from "./assets/navigation";
import { Link } from "react-router-dom";
import oasisbg from "/oasisbg.png"



const Courses = () => {
    return(
    <div>
        <div className="title">
            <Link id= "logo-image" to= "/">
            <img src= {oasisbg} alt="PlaNUr Image" /> 
            </Link>
        </div>
        
        
    <>

    <div className="nav">
        <Navigation/>
    </div>

    

    <div className="infoContainer">
        <div className="classOneInfo">

            <div className="profContainer">
                <h1 className="profName">Professor Name</h1>
            </div>
            <h2 className="profEmail"> Email</h2>
            <h2 className="linkedIn">LinkedIn</h2>
            <h2 chassName= "className">  RateMyProfessor </h2>

            <h1 className="className">Course Name</h1>
            <h1 className="location">Class Location</h1>
            <h2 className="classMap"> Classroom Map </h2>
            <h2 className="classPic"> Classroom Picture</h2>
            
            
        </div>
        
        <div className="classTwoInfo">
            
            <div className="profContainer">
                <h1 className="profName2">Professor Name 2</h1>
            </div>

            <h2 className="profEmail2"> Email 2</h2>
            <h2 className="linkedIn2">LinkedIn 2</h2>
            <h2 chassName= "className2">  RateMyProfessor 2 </h2>

            <h1 className="className2">Course Name 2</h1>
            <h1 className="location2">Class Location 2</h1>
            <h2 className="classMap2"> Classroom Map 2 </h2>
            <h2 className="classPic2"> Classroom Picture 2</h2>
            
            
        </div>
    </div>
        
    </>

        </div>

    
    );
}
export default Courses