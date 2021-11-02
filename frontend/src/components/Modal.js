import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Modal = ({ updateTask, id, modal }) => {

  const { 
    name, 
    setName, 
    task, 
    setTask } = useContext(MyContext)

  return (
    <div>
      <input 
        type='text'
        name='name'
        placeholder='name'
        onChange={ ({ target }) =>  setName(target.value) }
      />
      <input 
        type='text' 
        name='task' 
        placeholder='task' 
        onChange={ ({ target }) => setTask(target.value) } 
      />
      <button
        type='button'
        onClick={ () =>{ 
          updateTask(id, name, task);
          modal(false);
        }}
      >
        Ok
      </button>
    </div>
  ) 
}

export default Modal;
