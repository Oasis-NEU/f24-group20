import React from "react";
import Navigation from "./navigation";

const Courses = () => {
    return(
        <>
         <div>
         <Navigation/>
         <h1 className="profName">Professor Name</h1>
         <h2 className="profEmail"> Email</h2>
         <h2 className="linkedIn">LinkedIn</h2>
         <h2 chassName= "className">  RateMyProfessor </h2>

         <h1 className="className">Course Name</h1>
         <h1 className="location">Class Location</h1>
         <h2 className="classMap"> Classroom Map </h2>
         <h2 className="classPic"> Classroom Picture</h2>
        </div>
        
        </>
   
    );
}
export default Courses