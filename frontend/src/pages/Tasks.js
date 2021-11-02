import React, { useContext, useEffect } from 'react'
import BodyTask from '../components/BodyTask';
import Task from '../components/Task';
import MyContext  from '../context/MyContext';

const Tasks = () => {
  const {
    tasks, 
    getTasks,
    updateTask, 
    deleteTask } = useContext(MyContext);
 
  useEffect(() => {
    getTasks();
  }, [getTasks])

  function reloadTask(id, name, task) {
    updateTask(id, name, task);
    setTimeout(() => {
      getTasks();
    }, 1)
  };

  function reloadPage(id) {
    deleteTask(id);
    setTimeout(() => {
      getTasks();
    }, 1)
  };

 
  return (
    <div>
      <h1>Tasks</h1>
      <Task />
      {!tasks 
      ? <span>Loading</span> 
      : tasks.map((element, index) => (
       <BodyTask 
        key={ index }
        element={ element }
        reloadPage={ reloadPage }
        reloadTask={ reloadTask }
        />
      ))}
    </div>
  )
}

export default Tasks;
