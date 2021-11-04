import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import MyContext from './MyContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(true);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [task, setTask] = useState('');
  const [progress, setProgress] = useState('');

  // Axios functions
  function userExists(email, password) {
    const getUser = axios
      .post('http://192.168.15.8:5000/login', {
        email,
        password,
      })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem('token', response.data.token);
      });
    return getUser;
  }

  function createUser(username, email, password) {
    const newUser = axios
      .post('http://192.168.15.8:5000/users/create', {
        username,
        email,
        password,
      });
    setUsername('');
    setEmail('');
    setPassword('');
    return newUser;
  }

  const getTasks = useCallback(() => {
    const getAllTasks = axios
      .get('http://192.168.15.8:5000/tasks')
      .then((response) => setTasks(response.data));
    return getAllTasks;
  }, []);

  function createTask(name, task, progress) {
    const token = localStorage.getItem('token');
    const newTask = axios
      .post('http://192.168.15.8:5000/tasks/create', {
        name,
        task,
        progress,
      }, { headers: { Authorization: token } })
      .then((response) => setTasks([...tasks, response.data.task]));
    setName('');
    setTask('');
    return newTask;
  }

  function updateTask(id, name, task, progress) {
    const token = localStorage.getItem('token');
    const update = axios
      .put(`http://192.168.15.8:5000/tasks/${id}`, {
        name,
        task,
        progress,
      }, { headers: { Authorization: token } });
    return update;
  }

  function deleteTask(id) {
    const token = localStorage.getItem('token');
    const remove = axios
      .delete(`http://192.168.15.8:5000/tasks/${id}`,
        { headers: { Authorization: token } });
    return remove;
  }

  // Orderer functions
  const num = -1;
  function orderTaskByAlfabetic() {
    const order = tasks.sort((a, b) => {
      const aTask = a.task.toUpperCase();
      const bTask = b.task.toUpperCase();
      if (aTask === bTask) return 0;
      if (aTask > bTask) return 1;
      return num;
    });
    return setTasks(order);
  }

  function orderTaskByDate() {
    const order = tasks.sort((a, b) => {
      if (a.createAt === b.createAt) return 0;
      if (a.createAt > b.createAt) return 1;
      return num;
    });
    return setTasks(order);
  }

  function orderTaskByProgress() {
    const order = tasks.sort((a, b) => {
      if (a.progress === b.progress) return 0;
      if (a.progress > b.progress) return 1;
      return num;
    });
    return setTasks(order);
  }

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    status,
    setStatus,
    user,
    setUser,
    username,
    setUsername,
    userExists,
    createUser,
    getTasks,
    tasks,
    setTasks,
    name,
    setName,
    task,
    setTask,
    createTask,
    updateTask,
    deleteTask,
    progress,
    setProgress,
    orderTaskByAlfabetic,
    orderTaskByDate,
    orderTaskByProgress,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
