import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../styles/Task.css';

const Task = () => {
  const {
    name,
    task,
    progress,
    setName,
    setTask,
    setProgress,
    createTask,
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
    <div className="task-inputs">
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="Name"
        onChange={ nameInput }
      />
      <input
        type="text"
        className="form-control"
        name="task"
        placeholder="Task"
        onChange={ taskInput }
      />
      <select className="form-select" onChange={ progressInput }>
        <option value="">Choose a status</option>
        <option name="pending" value="Pending">Pending</option>
        <option name="in-progress" value="In progress">In progress</option>
        <option name="concluded" value="Concluded">Concluded</option>
      </select>
      <button
        type="button"
        className="btn btn-success"
        onClick={ () => createTask(name, task, progress) }
      >
        Add
      </button>
    </div>
  );
};

export default Task;
