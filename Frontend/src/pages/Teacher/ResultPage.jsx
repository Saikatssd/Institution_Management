import React, { useState } from 'react';

const ResultPage = () => {
  const classesList = [
    { className: 'DBMS CS ', students: [{ roll: '001', name: 'Student 1' }, { roll: '002', name: 'Student 2' }/* Add more students */] },
    { className: 'DBMS IT', students: [{ roll: '101', name: 'Student 101' }, ] },
    { className: 'MATHCS ', students: [{ roll: '001', name: 'Student 1' }, { roll: '002', name: 'Student 2' }/* Add more students */] },
    { className: 'MATH IT', students: [{ roll: '101', name: 'Student 101' }, ] },
    
  ];

  const [selectedClass, setSelectedClass] = useState(classesList[0]);
  const [results, setResults] = useState(selectedClass.students.map(student => ({ roll: student.roll, marks: '' })));
  const [updatedResults, setUpdatedResults] = useState([]);

  const handleUpdateResult = () => {

    const currentResults = [...results];

    setUpdatedResults((prevUpdatedResults) => ({
      ...prevUpdatedResults,
      [selectedClass.className]: currentResults,
    }));

    // Reset input fields
    setResults(selectedClass.students.map(student => ({ roll: student.roll, marks: '' })));
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-6">Result Page</h1>


      <div className="flex space-x-4 mb-4">
        {classesList.map((classItem) => (
          <button
            key={classItem.className}
            className={`bg-yellow-500 text-white p-2 rounded-md cursor-pointer ${selectedClass.className === classItem.className ? 'bg-blue-700' : ''}`}
            onClick={() => {
              setSelectedClass(classItem);
              setResults(classItem.students.map(student => ({ roll: student.roll, marks: '' })));
            }}
          >
            {classItem.className}
          </button>
        ))}
      </div>

      <table className="w-full mb-6">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Roll</th>
            <th className="py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{selectedClass.students[index].name}</td>
              <td className="py-2">{result.roll}</td>
              <td className="py-2">
                <input
                  type="text"
                  value={result.marks}
                  onChange={(e) => {
                    const newResults = [...results];
                    newResults[index].marks = e.target.value;
                    setResults(newResults);
                  }}
                  className="p-2 border rounded-md w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="max-w-md mx-auto">
        <button
          onClick={handleUpdateResult}
          className="mt-4 bg-green-500 text-white p-2 rounded-md cursor-pointer"
        >
          Update Result
        </button>
      </div>

    
{updatedResults[selectedClass.className] && (
  <div className="mt-6">
    <h2 className="text-2xl font-bold mb-2">Updated Results for {selectedClass.className}:</h2>
    <table className="w-full border border-yellow-500">
      <thead>
        <tr className="bg-yellow-500 text-white">
          <th className="py-2">Roll</th>
          <th className="py-2">Marks</th>
        </tr>
      </thead>
      <tbody>
        {updatedResults[selectedClass.className].map((result, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-200'}>
            <td className="py-2">{result.roll}</td>
            <td className="py-2">{result.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


      <div
        className="download-btn bg-blue-500 text-white p-2 rounded-md cursor-pointer mt-6"
        // onClick={handleDownloadPDF}
      >
        Download PDF
      </div>
    </div>
  );
};

export default ResultPage;