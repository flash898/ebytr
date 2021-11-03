import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Modal = ({ updateTask, id, modal }) => {
  const {
    name,
    task,
    progress,
    setName,
    setTask,
    setProgress,
  } = useContext(MyContext);

  function nameInput({ target }) {
    setName(target.value);
  }

  function taskInput({ target }) {
    setTask(target.value);
  }

  function progressInput({ target }) {
    setProgress(target.value);
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={ nameInput }
      />
      <input
        type="text"
        name="task"
        placeholder="task"
        onChange={ taskInput }
      />
      <select onChange={ progressInput }>
        <option name="pending" value="Pending">Pending</option>
        <option name="in-progress" value="In progress">In progress</option>
        <option name="concluded" value="Concluded">Concluded</option>
      </select>
      <button
        type="button"
        onClick={ () => {
          updateTask(id, name, task, progress);
          modal(false);
        } }
      >
        Ok
      </button>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Modal;
