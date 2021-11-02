import React, { useContext } from 'react'
import MyContext  from '../context/MyContext';

const Task = () => {
  const { 
    name,
    task,
    progress,
    nameInput,
    taskInput,
    progressInput,
    createTask } = useContext(MyContext);

  return (
    <div>
      <input 
        type='text'
        name='name'
        placeholder='name'
        onChange={ nameInput }
      />
      <input 
        type='text' 
        name='task' 
        placeholder='task'
        onChange={ taskInput }
      />
      <select onChange={ progressInput }>
        <option name='pending' value='Pending'>Pending</option>
        <option name='in-progress' value='In progress'>In progress</option>
        <option name='concluded' value='Concluded'>Concluded</option>
      </select>
      <button 
        type='button'
        onClick={ ()=> createTask(name, task, progress) }
      >
        Add
      </button>
    </div>
  );
}

export default Task;