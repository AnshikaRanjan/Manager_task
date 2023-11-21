import React from 'react';
import TaskInput from './TaskInput';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className='fullpage'>
      <div className='container'>
        <TaskInput />
      </div>
    </div>
  );
};

export default Dashboard;
