import './registration.scss';
import '../../styles/components/_button.scss';
import './bg.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
  
    try {
      const response = await fetch('http://localhost:4000/auth/register', {
        method:"register",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username, email, password
        })
      });
  
      // Check if the response status code indicates success
      if (response.status >= 200 && response.status < 300) {
        console.log('Successful Registration!!!');
        navigate('/signin');
      } else {
        const errorMessage = await response.json().then((data) => data.message);
        window.alert(errorMessage || 'Registration failed');
        console.error(errorMessage || 'Registration failed');
      }
    } catch (error) {
      console.log(error);
      // Handle network or server errors
      window.alert('Registration failed');
    }
  };
  
  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>
        <form className='form' method="register">
          <h1>Sign up</h1>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Name'
              name='username'
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <button className='button' type='submit' onClick={PostData}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;