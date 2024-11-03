import classData from './data/classes.json'; // Adjust the path as necessary
import professorData from './data/employees.json';

export const lookupCourseInfo = (crnToFind) => {
    const sections = classData.neu.sections.find(sections => sections.crn === crnToFind);
    const meetings = sections?.meetings?.[0];
    const profToFind = sections?.profs?.[0];
    const subToFind = sections?.subject;

    if (meetings && profToFind) {
        const profData = professorData.main.find(prof => prof.name === profToFind);
        const subjectName = classData.neu.subjects[subToFind];

        const meetingTimes = [];
        if (meetings.times) {
            for (const [day, timesArr] of Object.entries(meetings.times)) {
                timesArr.forEach(time => {
                    meetingTimes.push({
                        day: day,
                        start: time.start,
                        end: time.end
                    });
                });
            }
        }

        return [
            crnToFind,
            meetings.where || null, // Location
            profToFind || null,     // Professor
            profData?.email || null, // Email
            profData?.officeRoom || null, // Office
            sections.subject || null, // Subject
            sections.classId || null, // Class ID
            subjectName || null,
            meetingTimes || null,
            sections.seatsCapacity || null,
            sections.seatsRemaining || null
        ];
    } else {
        return null; // Return an array of nulls if not found
    }
};