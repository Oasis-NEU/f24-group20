import classData from './data/classes.json'; // Adjust the path as necessary
import professorData from './data/employees.json';
import rmpData from './data/ratemyprofessor.json';


export const lookupCourseInfo = (crnToFind) => {
    const sections = classData.neu.sections.find(sections => sections.crn === crnToFind);
    const meetings = sections?.meetings?.[0];
    const profToFind = sections?.profs?.[0];
    const subToFind = sections?.subject;

    const rmpArray = Object.values(rmpData);

    if (meetings && profToFind) {
        const profData = professorData.main.find(prof => prof.name === profToFind);
        const profFirstName = profData?.firstName;
        const profLastName = profData?.lastName;
        const rmpData = rmpArray.find(rmp => rmp.tFname === profFirstName && rmp.tLname === profLastName);
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
            sections.seatsRemaining || null,
            rmpData?.overall_rating || null
                ];
    } else {
        return null; // Return an array of nulls if not found
    }
};