import PropTypes from "prop-types"
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Modal = ({ updateTask, id, modal }) => {

  const { 
    name, 
    task,
    progress,
    nameInput,
    taskInput,
    progressInput } = useContext(MyContext)

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
      <select  onChange={ progressInput }>
        <option name='pending' value='pending'>Pending</option>
        <option name='in-progress' value='in-progress'>In progress</option>
        <option name='concluded' value='concluded'>Concluded</option>
      </select>
      <button
        type='button'
        onClick={ () =>{ 
          updateTask(id, name, task, progress);
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
