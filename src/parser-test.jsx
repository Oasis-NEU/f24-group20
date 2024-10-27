import React, { useState } from 'react';
import classData from './data/classes.json'; // Adjust the path as necessary
import professorData from './data/employees.json';

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
        const sections = classData.neu.sections.find(sections => sections.crn === crnToFind);
        
        const profToFind = sections.profs[0];
        const profData = professorData.main.find(profData => profData.name == profToFind);

        if (sections && sections.meetings && sections.profs && sections.subject && sections.classId) { 
            setLocation(sections.meetings[0].where);
            setProfessor(sections.profs[0]);
            setEmail(profData.email);
            setOffice(profData.officeRoom);
            setSubject(sections.subject);
            setClassId(sections.classId);
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
        function lookup(crn){
            setCrnInput(crn);
            [location, professor, email, office, subject, classId];
        }
    );
};

export default CourseInfoLookup;