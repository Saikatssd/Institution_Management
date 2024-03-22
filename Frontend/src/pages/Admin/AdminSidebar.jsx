import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = ({ options }) => {
  const location = useLocation();
  const currentOption = localStorage.getItem('selectedOption') || options[0];

  const handleOptionClick = (option) => {
    localStorage.setItem('selectedOption', option);
  };

  return (
    <div className="bg-gray-200 p-4 w-screen md:h-screen md:w-1/5 sticky top-0">
      <ul className="list-none p-0 m-0 w-full flex flex-row flex-wrap md:flex-col">
        {options.map((option) => (
          <li key={option} className="mb-2 md:mb-0 md:mr-2">
            <Link
              to={`/admin/${option.toLowerCase()}`}
              onClick={() => handleOptionClick(option)}
              className={`block px-4 py-2 rounded ${
                currentOption === option ? 'bg-yellow-500 text-white' : ''
              }`}
            >
              {option}
            </Link>
          </li>
        ))}
        {/* <li className="mb-2 md:mb-0 md:mr-2">
          
        </li> */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
