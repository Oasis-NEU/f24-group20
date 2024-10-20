import React from 'react'
import './App.css'
import Navigation from './assets/navigation'

function textInput({crn}){
  let x = {crn};
  if(x.length == 5 && x.isInteger()){
    return true;
  }
}

function App() {

  return (
    <>
    <head>
      <title>
        PlaNUr
      </title>
    </head>
      <div className="title">
      <h1 id = "title">PlaNUr</h1>  
      </div>
      <div className="textBody">
        <h2>
          Welcome to PlaNUr, the best way to compare and contrast classes! <br />
          Please input a CRN number to get started:
        </h2>
      <div className="card">
       <input type="text" className="textbox"></input>
       <button id = "goButton">GO</button>
       <Navigation/>
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
