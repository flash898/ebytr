import React, { useState } from 'react';
import Modal from './Modal';

const BodyTask = ({ element, reloadPage, reloadTask}) => {
  const [modal, setModal] = useState(false);

  if (modal) return <Modal updateTask={ reloadTask } id={ element._id } name={ element.name } task={ element.task } modal={ setModal }/>
  return (
    <div>
    <p>{ element.name }</p>
    <p>{ element.task }</p>
    <p>{ element.username }</p>
    <button
      type='button'
      onClick={ () => setModal(true) }
    >
      Edit
    </button>
    <button
      type='button'
      onClick={ () => reloadPage(element._id) }
    >
      Delete
    </button>
  </div>
  )
}

export default BodyTask;
