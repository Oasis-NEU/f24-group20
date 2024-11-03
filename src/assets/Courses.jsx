import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import oasisbg from "/oasisbg.png"
import MeetingTimesFormatter from '../meetingTimes.jsx'

function Courses() {
  const location = useLocation();
  const data = location.state; // This will have the passed data
  
  return (
    <div>
      <Link id="logo-image" to="/">
        <img src={oasisbg} alt="PlaNUr Image" />
      </Link>
      <h2>Course Information</h2>
      <p>Welcome to the course page for CRN: {data[0]}</p>
      <h1 className="classSubject">Subject: {data[7]}</h1>
      <h1 className="className">Course: {data[5]} {data[6]}</h1>
      <h1 className="profName">Professor: {data[2]}</h1>
      <h2 className="profEmail">Email: {data[3]}</h2>
      <h2 className="linkedIn">LinkedIn: LinkedIn</h2>
      <h2 chassName="rateMy">Rating: RateMyProfessor</h2>
      <h1 className="location">Classroom: {data[1]}</h1>
      <h2 className="meetingTimes"><MeetingTimesFormatter meetingTimes={data[8]} /></h2>
      <h2 className="classMap"> Classroom Map</h2>
      <h2 className="classPic"> Classroom Picture</h2>
      <h1 className="classAvailability">Availability: {data[10]} Remaining / {data[9]} Total</h1>
    </div>
  );
}

export default Courses;
