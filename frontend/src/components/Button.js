import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Button = (title) => {
  const { tasks } = useContext(MyContext);

  function orderTasks(title) {
    if(title === 'Por ordem alfabética') tasks.sort((a, b) => a.name - b.name);
    if(title === 'Data de criação') tasks.sort((a, b) => a.date - b.date);
    if(title === 'Status') tasks.sort((a, b) => a.status = b.status);
  }

  return (
    <button
      type='button'
      onClick={ (title) => orderTasks(title) }
    >
      {title}
    </button>
  );
}

export default Button;