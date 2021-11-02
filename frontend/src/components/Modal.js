import PropTypes from "prop-types"
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Modal = ({ updateTask, id, modal }) => {

  const { 
    name, 
    task, 
    nameInput,
    taskInput } = useContext(MyContext)

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

Modal.propTypes = {
  id: PropTypes.string,
  modal: PropTypes.func,
  updateTask: PropTypes.func
}

export default Modal;
