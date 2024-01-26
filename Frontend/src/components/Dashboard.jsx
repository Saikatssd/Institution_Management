import React from 'react';

const Dashboard = ({ userRole, userData }) => {
  return (
    <div>
      <h1>{userRole} Dashboard</h1>
      {/* <p>Welcome, {userData.name}!</p> */}
    </div>
  );
};

export default Dashboard;
