import React, { useContext, useEffect, useState } from 'react';
import BodyTask from '../components/BodyTask';
import Task from '../components/Task';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import '../styles/Tasks.css';

const Tasks = () => {
  const {
    tasks,
    getTasks,
    updateTask,
    deleteTask,
    orderTaskByAlfabetic,
    orderTaskByDate,
    orderTaskByProgress } = useContext(MyContext);

  const [change, setChange] = useState(false);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const reloadTask = (id, name, task, progress) => {
    updateTask(id, name, task, progress);
    setTimeout(() => {
      getTasks();
    }, 1);
  };

  const reloadPage = (id) => {
    deleteTask(id);
    setTimeout(() => {
      getTasks();
    }, 1);
  };

  return (
    <div className="page-tasks">
      <Header disable={ false } />
      <h1>To Do</h1>
      <button
        type="button"
        className="btn btn-warning"
        onClick={ () => {
          orderTaskByAlfabetic();
          setChange(!change);
        } }
      >
        Alphabetical Order
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={ () => {
          orderTaskByDate();
          setChange(!change);
        } }
      >
        Date
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={ () => {
          orderTaskByProgress();
          setChange(!change);
        } }
      >
        Status
      </button>
      <Task />
      <div className="div-tasks">
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
    </div>
  );
};

export default Tasks;
