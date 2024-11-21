import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
    <Link to="/"> Home </Link>
    <Link to="/Compare">Contact </Link>
    <Link to="/Courses">Courses </Link>
  </div>
  );
}

export default Navigation;