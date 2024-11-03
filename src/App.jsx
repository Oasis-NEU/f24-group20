<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassesParser from './parser'
import ClassesParserFunction from './parser-test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClassesParser /> {}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import Navigation from './assets/navigation'; 
import ClassesParser from './parser';
import { lookupCourseInfo } from './parser-func';


function App() {
  const [crn, setCrn] = useState('');
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

  return (
    <>
      <div className="title">
        <h1 id="title">PlaNUr</h1>
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
>>>>>>> Stashed changes
    </>
  );
}

export default App;