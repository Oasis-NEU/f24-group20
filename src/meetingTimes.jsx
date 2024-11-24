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
        '1': 'M',  // Monday
        '2': 'T',  // Tuesday
        '3': 'W',  // Wednesday
        '4': 'R',  // Thursday
        '5': 'F'   // Friday
    };

    // Group the meeting times by start and end time
    const groupedTimes = meetingTimes.reduce((acc, { day, start, end }) => {
        const timeRange = `${formatTime(start)} - ${formatTime(end)}`;
        const dayCode = daysOfWeek[day];

        if (acc[timeRange]) {
            acc[timeRange].push(dayCode);
        } else {
            acc[timeRange] = [dayCode];
        }

        return acc;
    }, {});

    const timeRanges = Object.entries(groupedTimes);

    // Check if all days with times have the same time range
    if (timeRanges.length === 1) {
        // If there's only one time range for all days that have times
        return (
            <div>
                <h2>Meeting Times: </h2>
                {timeRanges[0][0]} {/* Output the single time range */}
            </div>
        );
    }

    // Format the output string when there are multiple time ranges
    const formattedTimes = timeRanges.map(([timeRange, days]) => {
        return `${days.join(', ')}: ${timeRange}`;
    });

    return (
        <div>
            <h2 className="meetingTime">Meeting Times: </h2>
            {formattedTimes.join(', ')} {/* Join all the formatted times with commas */}
        </div>
    );
};

export default MeetingTimesFormatter;
