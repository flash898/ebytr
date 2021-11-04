import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Modal from './Modal';
import '../styles/BodyTask.css';

const BodyTask = ({ element, reloadPage, reloadTask }) => {
  const [modal, setModal] = useState(false);
  const id = '_id';
  if (modal) {
    return (<Modal
      updateTask={ reloadTask }
      id={ element[id] }
      name={ element.name }
      task={ element.task }
      progress={ element.progress }
      modal={ setModal }
      element={ element }
    />);
  }

  return (
    <div className="div-task">
      <p>{`Task Name: ${element.name}`}</p>
      <p>{`Task: ${element.task}`}</p>
      <p>{`User: ${element.username}`}</p>
      <p>{`Status: ${element.progress}`}</p>
      <p>{`Create date: ${element.createAt}`}</p>
      <div className="div-btn">
        <button
          type="button"
          className="btn btn-warning btn-task"
          onClick={ () => setModal(true) }
        >
          <FaRegEdit style={ { fontSize: '25px' } } />
        </button>
        <button
          type="button"
          className="btn btn-danger btn-task"
          onClick={ () => reloadPage(element[id]) }
        >
          <RiDeleteBin2Line style={ { fontSize: '25px' } } />
        </button>
      </div>
    </div>
  );
};

BodyTask.propTypes = {
  element: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    task: PropTypes.string,
    username: PropTypes.string,
    progress: PropTypes.string,
    createAt: PropTypes.string,
  }).isRequired,
  reloadPage: PropTypes.func.isRequired,
  reloadTask: PropTypes.func.isRequired,
};

export default BodyTask;
