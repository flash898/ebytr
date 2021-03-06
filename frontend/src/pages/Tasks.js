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
  const [order, setOrder] = useState(false);

  useEffect(() => {
    getTasks();
  }, [getTasks, change]);

  const reloadTask = async (id, name, task, progress) => {
    await updateTask(id, name, task, progress);
    setChange(!change);
  };

  const reloadPage = async (id) => {
    await deleteTask(id);
    setChange(!change);
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
          setOrder(!order);
        } }
      >
        Alphabetical Order
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={ () => {
          orderTaskByDate();
          setOrder(!order);
        } }
      >
        Date
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={ () => {
          orderTaskByProgress();
          setOrder(!order);
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
