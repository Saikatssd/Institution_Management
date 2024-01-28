import React from 'react';

export default function AdminContainer() {

    return (
        <div className="bg-gray-800 text-white w-1/5 p-4 h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            {/* Add navigation links or icons for different sections */}
            <ul>
                <li className="mb-2">
                    <a href="#" className="block text-white hover:text-gray-400">
                        Manage Students
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block text-white hover:text-gray-400">
                        Manage Teachers
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block text-white hover:text-gray-400">
                        Send Notices
                    </a>
                </li>
            </ul>
        </div>
    );
};



