import React from 'react'
import './App.css'
import Navigation from './assets/navigation'
import { Link } from 'react-router-dom'
import oasisbg from "/oasisbg.png"

function textInput({crn}){
  let x = {crn};
  if(x.length == 5 && x.isInteger()){
    return true;
  }
}

function App() {

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
       <input type="text" className="textbox"></input>
       <Link id = "goButton" to="/Courses">GO</Link>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
