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
            <div className="mapFormat"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24207.383434676187!2d-71.12799802568361!3d42.33990399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern%20University!5e1!3m2!1sen!2sus!4v1731866750161!5m2!1sen!2sus" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            
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
            <div className="mapFormat"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24207.383434676187!2d-71.12799802568361!3d42.33990399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern%20University!5e1!3m2!1sen!2sus!4v1731866750161!5m2!1sen!2sus" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <h2 className="classPic2"> Classroom Picture 2</h2>
            
            
        </div>
    </div>
        
    </>

        </div>

    
    );
}
export default Courses