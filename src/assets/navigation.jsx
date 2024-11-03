import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // useParams hook to access route parameters

function Courses() {
  const { crn } = useParams(); // Get the CRN from the URL parameter

  return (
    <div>
      <h2>Course Information</h2>
      <p>Welcome to the course page for CRN: {crn}</p> {/* Display the CRN */}
      {/* You can fetch and display more course details based on the CRN here */}
    </div>
  );
}

const Navigation = () => {
  return (
    <div>
    <Link to="/"> Home </Link>
    <Link to="/Contact">Contact </Link>
    <Link to="/Courses">Courses </Link>
  </div>
  );
}

export default Navigation;