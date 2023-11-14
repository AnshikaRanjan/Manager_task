import React from 'react';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div className='home_container'>
      <div className='images'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/009/352/814/original/time-management-illustration-concept-on-white-background-vector.jpg'
          alt='img'
        ></img>
      </div>
      <div className='text'>
        <h1>Task Scheduler</h1>
        <p className='box'>
        Take control of your tasks and achieve your goals with our powerful Task Management Tools
        </p>
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={faCirclePlay} />
        <p className='icon_cap'> GET STARTED </p>
      </div>
    </div>
  );
};

export default Home;
