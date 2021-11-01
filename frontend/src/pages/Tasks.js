import React, { useContext, useEffect } from 'react'
import Task from '../components/Task';
import MyContext  from '../context/MyContext';

const Tasks = () => {
  const { tasks, getTasks } = useContext(MyContext);
 
  useEffect(() => {
    getTasks();
  }, [getTasks])

  console.log(tasks);
  return (
    <div>
      <h1>Tasks</h1>
      <Task />
      {!tasks 
      ? <span>Loading</span> 
      : tasks.map((task, index) => (
        <div key={ index }>
          <p>{ task.name }</p>
          <p>{ task.task }</p>
          <p>{ task.username }</p>
        </div>
      ))}
    </div>
  )
}

export default Tasks;
