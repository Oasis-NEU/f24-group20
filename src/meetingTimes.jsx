// MeetingTimesFormatter.jsx
import React from 'react';

const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const period = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure two-digit format

    return `${formattedHours}:${formattedMinutes} ${period}`;
};

const MeetingTimesFormatter = ({ meetingTimes }) => {
    const daysOfWeek = {
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday'
    };

    const formattedTimes = [];

    for (let i = 0; i < meetingTimes.length; i++) {
        const { day, start, end } = meetingTimes[i];
        const dayName = daysOfWeek[day];
        const formattedStart = formatTime(start);
        const formattedEnd = formatTime(end);
        formattedTimes.push(`${dayName}: ${formattedStart} - ${formattedEnd}`);
    }

    return (
        <div>
            <h2>Meeting Times: </h2>
            {formattedTimes.length > 0 ? (
                formattedTimes.map((time, index) => (
                    <span key={index}>
                        {time}
                        {index < formattedTimes.length - 1 && <> , <br /></>} 
                    </span>
                ))) : ('No meeting times available.' )}
        </div>
    );
};

export default MeetingTimesFormatter;
