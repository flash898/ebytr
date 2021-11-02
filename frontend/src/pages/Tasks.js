import React, { useContext, useEffect } from 'react';
import BodyTask from '../components/BodyTask';
import Task from '../components/Task';
import MyContext  from '../context/MyContext';

const Tasks = () => {
  const {
    tasks,
    getTasks,
    updateTask,
    deleteTask,
    setTasks } = useContext(MyContext);
 
  useEffect(() => {
    getTasks();
  }, [getTasks])

  function reloadTask(id, name, task, progress) {
    updateTask(id, name, task, progress);
    setTimeout(() => {
      getTasks();
    }, 1)
  }

  function reloadPage(id) {
    deleteTask(id);
    setTimeout(() => {
      getTasks();
    }, 1);
  }

  function orderTaskByAlfabetic() {
    console.log(tasks);
    const order = tasks.sort((a, b) => a.name - b.name);
    return setTasks(order);
  }

  return (
    <div>
      <h1>Tasks</h1>
      <button
        type='button'
        onClick={ orderTaskByAlfabetic }
      >
        Alphabetical Order
      </button>
      <button
        type='button'
      >
        Date
      </button>
      <button
        type='button'
      >
        Status
      </button>
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
  );
}

export default Tasks;
