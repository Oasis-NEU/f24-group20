import React, { useState } from 'react';
import { Route, Routes, HashRouter, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Navigation from './assets/navigation'; 
import ClassesParser from './parser';
import { lookupCourseInfo } from './parser-func';

function textInput({crn}){
  let x = {crn};
  if(x.length == 5 && x.isInteger()){
    return true;
  }
}


function App() {
  const [crn, setCrn] = useState('');
  const [crn2, setCrn2] = useState('');
  const navigate = useNavigate();

  // Function to handle the "GO" button click and navigate to the Courses page
  const handleGoClick = () => {
    if (lookupCourseInfo(crn)) {
      navigate(`/Courses`, {state: lookupCourseInfo(crn)});
      //<Link to={{pathname: `/Courses`, state: lookupCourseInfo(crn)}}>ohhh</Link>
    } else {
      alert('Please enter a valid CRN number.'); 
    }
  };

  const handleGoCompare = () => {
    if (lookupCourseInfo(crn) && lookupCourseInfo(crn2)) {
      navigate(`/Compare`, {state: [data, lookupCourseInfo(crn2)]});
      //<Link to={{pathname: `/Courses`, state: lookupCourseInfo(crn)}}>ohhh</Link>
    } else {
      alert('Please enter a valid CRN number.'); 
    }
  };

  return (
    <>


      <div className="title">
      <img src={oasisbg} alt="plaNUr Image" />  
      </div>
      <div className="textBody">
        <h2>
          Welcome to PlaNUr, the best way to compare and contrast classes! <br />
          Please input a CRN number to get started:
        </h2>
        <div className="card">
          <div id="coursesCRN">
            <input
              type="text"
             className="textbox"
             value={crn}
             onChange={(e) => setCrn(e.target.value)} 
             placeholder="Enter CRN"
            />
            <button id="goButton" onClick={handleGoClick}>GO</button>
          </div>
          <div id="compareCRN">
            <input
             type="text"
              className="textbox"
              value={crn2}
              onChange={(e) => setCrn2(e.target.value)} 
             placeholder="Enter second CRN"
            />
           <button id="goButton" onClick={handleGoCompare}>GO</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
