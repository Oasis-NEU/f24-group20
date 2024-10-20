import React, { useState } from 'react';
import data from './classes.json'; // Adjust the path as necessary

const CourseInfoLookup = () => {
    const [crnInput, setCrnInput] = useState(''); // State to track user input
    const [location, setLocation] = useState(null); // State to hold the location
    const [professor, setProfessor] = useState(null);
    const [email, setEmail] = useState(null);
    const [office, setOffice] = useState(null);
    const [subject, setSubject] = useState(null);
    const [classId, setClassId] = useState(null);
    const [error, setError] = useState(null); // State for error messages

    const handleInputChange = (event) => {
        setCrnInput(event.target.value); // Update state with user input
    };

    const handleLookup = () => {
        const crnToFind = String(crnInput); // Convert input to a string
        const classes = data.classes.find(classes => classes.crn === crnToFind);

        if (classes && classes.meetings && classes.profs && classes.subject && classes.classId) { 
            setLocation(classes.meetings[0].where);
            setProfessor(classes.profs[0]);
            setEmail(null);
            setOffice(null);
            setSubject(classes.subject);
            setClassId(classes.classId);
            setError(null); // Clear any previous error
        } else {
            setLocation(null); // Clear location if not found
            setProfessor(null);
            setEmail(null);
            setOffice(null);
            setSubject(null);
            setClassId(null);
            setError(`No class found with CRN ${crnToFind}`); // Update error message
        }
    };

    return (
        <div>
            <h1>Course Lookup</h1>
            <input
                type="number"
                value={crnInput}
                onChange={handleInputChange}
                placeholder="Enter CRN"
            />
            <button onClick={handleLookup}>Look Up Location</button>
            {location && <p>The location for CRN {crnInput} is: {location}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleLookup}>Look Up Professor</button>
            {professor && <p>The location for CRN {crnInput} is: {professor}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default CourseInfoLookup;