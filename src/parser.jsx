import React, { useState } from 'react';
import data from './classes.cache.json'; // Adjust the path as necessary

const LocationLookup = () => {
    const [crnInput, setCrnInput] = useState(''); // State to track user input
    const [location, setLocation] = useState(null); // State to hold the location
    const [error, setError] = useState(null); // State for error messages

    const handleInputChange = (event) => {
        setCrnInput(event.target.value); // Update state with user input
    };

    const handleLookup = () => {
        const crnToFind = String(crnInput); // Convert input to a number
        const classes = data.classes.find(classes => classes.crn === crnToFind); // Replace "item" with "classes"

        if (classes && classes.meetings) { 
            setLocation(classes.meetings[0].where); // Update to use "meetings"
            setError(null); // Clear any previous error
        } else {
            setLocation(null); // Clear location if not found
            setError(`No class found with CRN ${crnToFind}`); // Update error message
        }
    };

    return (
        <div>
            <h1>Location Lookup</h1>
            <input
                type="number"
                value={crnInput}
                onChange={handleInputChange}
                placeholder="Enter CRN"
            />
            <button onClick={handleLookup}>Look Up Location</button>
            {location && <p>The location for CRN {crnInput} is: {location}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default LocationLookup;