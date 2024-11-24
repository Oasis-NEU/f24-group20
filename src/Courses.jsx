import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import oasisbg from "/oasisbg.png";
import MeetingTimesFormatter from './meetingTimes.jsx';
import ClassesParser from './parser';
import { lookupCourseInfo } from './parser-func';
import WordToMap from './MapMaker';

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
          <h2 chassName="meetingTimes">Meeting Time: </h2>
          <h1 className="location">Room: <br></br>{data[1]}</h1>
          <MeetingTimesFormatter meetingTimes={data[8]}></MeetingTimesFormatter>
                        <div className="meetingTimes">
                            <p className={data[8].some(meeting => meeting.day === '1') ? "yesmeets" : "nomeets"}>M</p>
                            <p className={data[8].some(meeting => meeting.day === '2') ? "yesmeets" : "nomeets"}>T</p>
                            <p className={data[8].some(meeting => meeting.day === '3') ? "yesmeets" : "nomeets"}>W</p>
                            <p className={data[8].some(meeting => meeting.day === '4') ? "yesmeets" : "nomeets"}>T</p>
                            <p className={data[8].some(meeting => meeting.day === '5') ? "yesmeets" : "nomeets"}>F</p>
                        </div>
                        <h3 className={data[10]/data[9] > 0.75 ? "availGood" : data[10]/data[9] >= 0.25 ? "availMid" : "availBad"}>Availability: {data[10]} Remaining / {data[9]} Total</h3>
          <WordToMap word={data[1].split(' ')[0]}></WordToMap>
          <h2 className="classPic"> Classroom Picture</h2>
        </div>
      </div>
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

