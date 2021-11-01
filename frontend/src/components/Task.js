import React, { useContext } from 'react'
import MyContext  from '../context/MyContext';

const Task = () => {
  const { 
    name,
    task,
    nameInput,
    taskInput,
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
      <button 
        type='button'
        onClick={ ()=> createTask(name, task) }
      >
        Add
      </button>
    </div>
  )
}

export default Task;