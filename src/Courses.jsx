import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import oasisbg from "/oasisbg.png"
import Navigation from './assets/navigation'; 
import MeetingTimesFormatter from './meetingTimes.jsx'
import ClassesParser from './parser';
import { lookupCourseInfo } from './parser-func';

function Courses() {
  const location = useLocation();
  const data = location.state; // This will have the passed data
  const [crn, setCrn] = useState('');
  const [crn2, setCrn2] = useState('');
  const navigate = useNavigate();
console.log("no");

  // Function to handle the "GO" button click and navigate to the Courses page
  const handleGoCompare = () => {
    if (lookupCourseInfo(crn2)) {
      console.log("Hello");
      navigate('../Compare', {state: [data,lookupCourseInfo(crn2)]});
      //<Link to={{pathname: `/Courses`, state: lookupCourseInfo(crn)}}>ohhh</Link>
    } else {
      alert('Please enter a valid CRN number.');
    }
  };

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
      <h2 className="rateMy">Rating: RateMyProfessor</h2>
      <h1 className="location">Classroom: {data[1]}</h1>
      <h2 className="meetingTimes"><MeetingTimesFormatter meetingTimes={data[8]} /></h2>
      <h2 className="classMap"> Classroom Map</h2>
      <h2 className="classPic"> Classroom Picture</h2>
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
