import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import oasisbg from "/oasisbg.png";
import MeetingTimesFormatter from './meetingTimes.jsx';
import ClassesParser from './parser';
import { lookupCourseInfo } from './parser-func';

function Courses() {
  const location = useLocation();
  const data = location.state; // This will have the passed data
  const [crn2, setCrn2] = useState('');
  const navigate = useNavigate();

  const handleGoCompare = () => {
    if (lookupCourseInfo(crn2)) {
      navigate('../Compare', { state: [data, lookupCourseInfo(crn2)] });
    } else {
      alert('Please enter a valid CRN number.');
    }
  };

  return (
    <div>
      <Link id="logo-image" to="/">
      <div className="title">
      <img src={oasisbg} alt="plaNUr Image"/>  
      </div>
      </Link>
      <h2 className="welcome">Course Information for CRN: {data[0]}</h2>
      <div className="infoContainer">
        <div className="classInfo">
          <h1 className="className">{data[5]} {data[6]}</h1>
          <div className="profContainer">
            <h1 className="profName">{data[2]}</h1>
          </div>
          <h2 className="profEmail">Email: {data[3]}</h2>
          <h2 chassName="className">Rating: {data[11]}</h2>
          <h1 className="location">Room: <br></br>{data[1]}</h1>
          <div className="mapFormat">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24207.383434676187!2d-71.12799802568361!3d42.33990399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern%20University!5e1!3m2!1sen!2sus!4v1731866750161!5m2!1sen!2sus" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <h2 className="classPic"> Classroom Picture</h2>
        </div>
      </div>
      <h2 className="meetingTimes"><MeetingTimesFormatter meetingTimes={data[8]} /></h2>
      <h1 className="classAvailability">Availability: {data[10]} Remaining / {data[9]} Total</h1>
      <input
        type="text"
        className="textbox"
        value={crn2}
        onChange={(e) => setCrn2(e.target.value)}
        placeholder="Enter second CRN"
      />
      <button id="goButton" onClick={handleGoCompare}>GO</button>
    </div>
  );
}

export default Courses;

