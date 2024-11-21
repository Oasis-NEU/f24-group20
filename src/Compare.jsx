import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import oasisbg from "/oasisbg.png"
import Navigation from './assets/navigation'; 
import MeetingTimesFormatter from './meetingTimes.jsx'

function Compare() {
  const location = useLocation();
  const dataset = location.state; // This will have the passed data
  const [crn, setCrn] = useState('');
  const data1 = dataset[0];
  const data2 = dataset[1];
  const navigate = useNavigate();
console.log("no");

  // Function to handle the "GO" button click and navigate to the Courses page

  return (
  <div>
    
      <Link id="logo-image" to="/">
        <img src={oasisbg} alt="PlaNUr Image" />
      </Link>
      <h2>Course Information</h2>
      <p>Welcome to the course page for CRN: {data2[0]}</p>
      <p>Test: {data1[0]}</p>
      <p>Test: {data2[0]}</p>
      <h1 className="classSubject">Subject: {data2[7]}</h1>
      <h1 className="className">Course: {data2[5]} {data2[6]}</h1>
      <h1 className="profName">Professor: {data2[2]}</h1>
      <h2 className="profEmail">Email: {data2[3]}</h2>
      <h2 className="linkedIn">LinkedIn: LinkedIn</h2>
      <h2 className="rateMy">Rating: RateMyProfessor</h2>
      <h1 className="location">Classroom: {data2[1]}</h1>
      <h2 className="meetingTimes"><MeetingTimesFormatter meetingTimes={data2[8]} /></h2>
      <h2 className="classMap"> Classroom Map</h2>
      <h2 className="classPic"> Classroom Picture</h2>
      <h1 className="classAvailability">Availability: {data2[10]} Remaining / {data2[9]} Total</h1>
    </div>

    
  );
}

export default Compare;
