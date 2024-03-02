
import React, { useState } from 'react';
const classesList = [
    { className: 'DBMS CS' },
    { className: 'DBMS IT' },
    { className: 'MATH CS' },
    { className: 'MATH IT' },
  ];
const TeacherNotes = () => {
   
  const [files, setFiles] = useState([]);
  const [selectedClass, setSelectedClass] = useState(''); 
  const [classNotes, setClassNotes] = useState({});

  
    
    const onFileChange = (e) => {
        if (!selectedClass) {
          alert('Please select a class before uploading notes.');
          return;
        }
    
        const selectedFiles = e.target.files;
        setFiles(selectedFiles);
      };
    
      const uploadNotes = () => {
        if (!selectedClass) {
          alert('Please select a class before uploading notes.');
          return;
        }
    
        if (files.length === 0) {
          alert('Please choose at least one file to upload.');
          return;
        }
    
        setClassNotes((prevNotes) => ({
          ...prevNotes,
          [selectedClass]: [...(prevNotes[selectedClass] || []), ...files],
        }));
    
       
        setFiles([]);
      };
 

  const deletePdf = (fileIndex) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this PDF?");
    if (shouldDelete) {
      const updatedNotes = { ...classNotes };
      const updatedFiles = [...updatedNotes[selectedClass]];
      updatedFiles.splice(fileIndex, 1);
      updatedNotes[selectedClass] = updatedFiles;
      setClassNotes(updatedNotes);
    }
  };

  const downloadPdf = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const viewPdf = (file) => {
    if (file) {
      window.open(URL.createObjectURL(file), '_blank');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="class">Select Class:</label>
        <select
          id="class"
          onChange={(e) => setSelectedClass(e.target.value)}
          value={selectedClass}
        >
          <option value="">Select a Class</option>
          {classesList.map((cls, index) => (
            <option key={index} value={cls.className}>
              {cls.className}
            </option>
          ))}
        </select>
      </div>
     
      <div className="mb-4">
        <label htmlFor="file">Upload PDF:</label>
        <input
          type="file"
          id="file"
          accept="application/pdf"
          onChange={onFileChange}
          multiple
        />
      </div>
      <button className="bg-blue-500 text-white m-2 p-2 rounded-md cursor-pointer" onClick={uploadNotes}>
        Upload Notes
      </button>
      {classNotes[selectedClass] && classNotes[selectedClass].length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classNotes[selectedClass].map((file, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <span className="block text-lg font-semibold mb-2">{file.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => viewPdf(file)}
                  className="material-icons text-green-500 cursor-pointer"
                >
                  visibility
                </button>
                <button
                  onClick={() => downloadPdf(file)}
                  className="material-icons text-blue-500 cursor-pointer"
                >
                  cloud_download
                </button>
                <button
                  onClick={() => deletePdf(index)}
                  className="material-icons text-red-500 cursor-pointer"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherNotes;

