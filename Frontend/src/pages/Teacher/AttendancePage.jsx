
import React, { useState, useEffect } from 'react';

const AttendancePage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    
    const classesList = [
        { className: 'DBMS CS ', students: [{ roll: '001', name: 'Student 1' }, { roll: '002', name: 'Student 2' }/* Add more students */] },
        { className: 'DBMS IT', students: [{ roll: '101', name: 'Student 101' }, ] },
        { className: 'MATHCS ', students: [{ roll: '001', name: 'Student 1' }, { roll: '002', name: 'Student 2' }/* Add more students */] },
        { className: 'MATH IT', students: [{ roll: '101', name: 'Student 101' }, ] },
        
      ];

    setClasses(classesList);
  }, []);

  useEffect(() => {
    // Load attendance data for the current date and selected class from localStorage
    const savedAttendance = JSON.parse(localStorage.getItem('attendance')) || {};
    setAttendance(savedAttendance);
  }, [selectedClass]);

  const handleAttendanceChange = (classIndex, studentIndex) => {
    setAttendance((prevAttendance) => {
      const classKey = classes[classIndex].className;
      const roll = classes[classIndex].students[studentIndex].roll;

      return {
        ...prevAttendance,
        [classKey]: {
          ...prevAttendance[classKey],
          [currentDate]: {
            ...prevAttendance[classKey]?.[currentDate],
            [roll]: !prevAttendance[classKey]?.[currentDate]?.[roll], // Toggle the attendance status
          },
        },
      };
    });
  };

  const saveAttendance = () => {
    localStorage.setItem('attendance', JSON.stringify(attendance));
    alert('Attendance saved!');
  };

  const renderSavedAttendance = () => {
    if (!selectedClass) {
      return null;
    }

    const classKey = selectedClass.className;
    const savedAttendanceData = attendance[classKey]?.[currentDate];

    if (!savedAttendanceData) {
      return <p>No attendance data for {classKey} today.</p>;
    }

    return (
      <div>
        <h2>Saved Attendance for {classKey} - {currentDate}:</h2>
        <ul>
          {Object.entries(savedAttendanceData).map(([roll, present]) => (
            <li key={roll}>
              {roll}: {present ? 'Present' : 'Absent'}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-6">Attendance Page</h1>

      <div className="flex  space-x-4 mb-4">
        {classes.map((classItem, index) => (
          <button
            key={index}
            className={`bg-yellow-500 text-white p-2 rounded-md cursor-pointer ${selectedClass === classItem ? 'bg-blue-700' : ''}`}
            onClick={() => setSelectedClass(classItem)}
          >
            {classItem.className}
          </button>
        ))}
      </div>

    
      {selectedClass && (
         <div className="overflow-x-auto">
         <table className="w-full mb-6">
           <thead>
             <tr>
               <th className="py-2">Roll</th>
               <th className="py-2">Name</th>
               <th className="py-2">Present</th>
             </tr>
           </thead>
           <tbody>
             {selectedClass.students.map((student, index) => (
               <tr key={student.roll} className="border-b">
                 <td className="py-2">{student.roll}</td>
                 <td className="py-2">{student.name}</td>
                 <td className="py-2">
                   <input
                     type="checkbox"
                     checked={attendance[selectedClass.className]?.[currentDate]?.[student.roll] || false}
                     onChange={() => handleAttendanceChange(classes.indexOf(selectedClass), index)}
                   />
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     )}

     <div
       className="bg-blue-500 text-white p-2 rounded-md cursor-pointer mt-6 text-center"
       onClick={saveAttendance}
     >
       Save Attendance
     </div>

      {renderSavedAttendance()}
    </div>
  );
};

export default AttendancePage;
