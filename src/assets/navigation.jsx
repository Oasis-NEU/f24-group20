import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/courses">Courses</Link>
  </div>
  );
}

export default Navigation;