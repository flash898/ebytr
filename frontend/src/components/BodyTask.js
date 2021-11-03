import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from './Modal';

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
    />);
  }

  return (
    <div>
      <p>{ element.name }</p>
      <p>{ element.task }</p>
      <p>{ element.username }</p>
      <p>{ element.progress }</p>
      <p>{ element.createAt }</p>
      <button
        type="button"
        onClick={ () => setModal(true) }
      >
        Edit
      </button>
      <button
        type="button"
        onClick={ () => reloadPage(element[id]) }
      >
        Delete
      </button>
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
