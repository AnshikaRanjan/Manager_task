import './App.css';
import React from 'react';
import About from './components/about_us/about';
import Header from './components/header/Header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';

import TaskManager from './pages/taskmanagement/TaskManager';
import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path='/taskmanager' element={<TaskManager />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
