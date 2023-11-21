import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import './TaskInput.scss';

const TaskInput = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTaskText !== '') {
      const task = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };

      setTasks([...tasks, task]);
      setNewTaskText('');
    }
  };

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleTaskRemoval = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className='taskInput'>
      <input
        type='text'
        className='txtb'
        placeholder='Add a task'
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.target.value)}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleSubmit(event);
          }
        }}
      />

      <button onClick={handleSubmit} className='taskButton'>Add Task</button>

      <div className='taskList'>
        <div className='notcomp'>
          <h3>Not Completed</h3>
          {tasks.filter((task) => !task.completed).map((task) => (
            <div 
              key={task.id}
              className={`task ${task.completed ? 'completed' : ''}`}
            >
              <span className='tasktext'>{task.text}</span>

              <FontAwesomeIcon
                icon={faTrashAlt}
                className='icon'
                onClick={() => handleTaskRemoval(task.id)}
              />

              <FontAwesomeIcon
                icon={faCheck}
                className='icon'
                onClick={() => handleTaskCompletion(task.id)}
              />
            </div>
          ))}
        </div>

        <div className='comp'>
          <h3>Completed</h3>
          {tasks.filter((task) => task.completed).map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? 'completed' : ''}`}
            >
              <span className='tasktext'>{task.text}</span>

              <FontAwesomeIcon
                icon={faTrashAlt}
                className='icon'
                onClick={() => handleTaskRemoval(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
