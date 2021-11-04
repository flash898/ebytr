import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Modal = ({ updateTask, id, modal, element }) => {
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
    <div className="div-modal" style={ { position: 'absolute', marginTop: '330px' } }>
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="Name"
        onChange={ nameInput }
        value={ element.name }
      />
      <input
        type="text"
        className="form-control"
        name="task"
        placeholder="Task"
        onChange={ taskInput }
        value={ element.task }
      />
      <select className="form-select" onChange={ progressInput }>
        <option name="pending" value="Pending">Pending</option>
        <option name="in-progress" value="In progress">In progress</option>
        <option name="concluded" value="Concluded">Concluded</option>
      </select>
      <button
        type="button"
        className="btn btn-success"
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
  element: PropTypes.shape({
    name: PropTypes.string,
    task: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Modal;
