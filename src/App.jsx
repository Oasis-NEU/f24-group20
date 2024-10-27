import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navigation from './assets/navigation'; 


function App() {
  const [crn, setCrn] = useState(''); 
  const navigate = useNavigate(); 

  // Function to handle the "GO" button click and navigate to the Courses page
  const handleGoClick = () => {
    if (crn.length === 5) {
      navigate(`/Courses/${crn}`); 
    } else {
      alert('Please enter a valid 5-digit CRN number.');
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
    </>
  );
}

export default App;
