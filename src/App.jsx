import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import Navigation from './assets/navigation'; 
import ClassesParser from './parser';
import { lookupCourseInfo } from './parser-func';
import oasisbg from "/oasisbg.png";


function App() {
  const [crn, setCrn] = useState('');
  const navigate = useNavigate();

  // Function to handle the "GO" button click and navigate to the Courses page
  const handleGoClick = () => {
    if (lookupCourseInfo(crn)) {
      navigate(`/Courses`, {state: lookupCourseInfo(crn)});
    } else {
      alert('Please enter a valid CRN number.');
    }
  };

  return (
    <>
      <div className="title">
      <img src={oasisbg} alt="plaNUr Image"/>  
      </div>
      <div className="textBody">
        <h2>
          Welcome to PlaNUr, the best way to compare and contrast classes! <br />
          Please input a CRN number to get started:
        </h2>
        <div className="card">
          <input
            type="text"
            className="textbox"
            value={crn}
            onChange={(e) => setCrn(e.target.value)} 
            placeholder="Enter CRN"
          />
          <button id="goButton" onClick={handleGoClick}>GO</button> {}
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default App;