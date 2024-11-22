import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import oasisbg from "/oasisbg.png"
import Navigation from './assets/navigation';
import MeetingTimesFormatter from './meetingTimes.jsx'

const Compare = () => {
    const location = useLocation();
    const dataset = location.state; // This will have the passed data
    const data1 = dataset[0];
    const data2 = dataset[1];
    return (
        <div>
            <div className="title">
                <Link id="logo-image" to="/">
      <img src={oasisbg} alt="plaNUr Image"/>  
                </Link>
            </div>
            <>
                <div className="nav">
                    <Link to="/"> Home </Link>
                </div>
                <div className="infoContainer">
                    <div className="classInfo">
                    <h1 className="className">{data1[5]} {data1[6]}</h1>
                        <div className="profContainer">
                            <h1 className="profName">{data1[2]}</h1>
                        </div>
                        <h2 className="profEmail">Email: {data1[3]}</h2>
                        <h2 chassName="className">Rating: {data1[11]}</h2>
                        <h1 className="location">Room: <br></br>{data1[1]}</h1>
                        <div className="mapFormat">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24207.383434676187!2d-71.12799802568361!3d42.33990399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern%20University!5e1!3m2!1sen!2sus!4v1731866750161!5m2!1sen!2sus" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <h2 className="classPic"> Classroom Picture</h2>
                    </div>
                    <div className="classInfo">
                    <h1 className="className">{data2[5]} {data2[6]}</h1>
                        <div className="profContainer">
                            <h1 className="profName2">{data2[2]}</h1>
                        </div>
                        <h2 className="profEmail">Email: {data2[3]}</h2>
                        <h2 chassName="className2">Rating: {data2[11]}</h2>
                        <h1 className="location">Room: <br></br>{data2[1]}</h1>
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
export default Compare