import PropTypes from "prop-types"
import React, { useState, useCallback } from 'react';
import MyContext from './MyContext';
import axios from 'axios';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState(true);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [task, setTask] = useState('');
  const [progress, setProgress] = useState('');

  // Input functions
  function ableButton() {
    const numMin = 6;
    const regex = /\w+@\w+.com(.br)?/;
    if (regex.test(email) && password.length >= numMin) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  function loginInput({ target }) {
    setEmail(target.value);
    ableButton();
  }

  function passwordInput({ target }) {
    setPassword(target.value);
    ableButton();
  }

  function confirmInput({ target }) {
    setConfirm(target.value);
    ableButton();
  }

  function usernameInput({ target }) {
    setUsername(target.value);
    ableButton();
  }

  function clearInputs(){
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirm('');
  }

  function nameInput({ target }) {
    setName(target.value);
  }

  function taskInput({ target }) {
    setTask(target.value);
  }

  function progressInput({ target }) {
    setProgress(target.value)
  }

  // Axios functions
  function userExists(email, password) {
    const user = axios
    .post('http://localhost:5000/login', { 
      email: email,
      password: password 
    })
    .then((response) => {
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    });
    return user;
  }

  function createUser(username, email, password) {
    const newUser = axios
    .post('http://localhost:5000/users/create', {
      username: username,
      email: email,
      password: password
    });
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirm('');
    return newUser;
  }

  const getTasks = useCallback(() => {
    const tasks = axios
    .get('http://localhost:5000/tasks')
    .then((response) => setTasks(response.data));
    return tasks;
  }, []);

  function createTask(name, task, progress) {
    const token = localStorage.getItem('token');
    const newTask = axios
    .post('http://localhost:5000/tasks/create', {
      name: name,
      task: task,
      progress: progress
    }, { headers: { Authorization: token } })
    .then((response) => setTasks([...tasks, response.data.task]));
    setName('');
    setTask('');
    return newTask;
  }

  function updateTask(id, name, task, progress) {
    const token = localStorage.getItem('token');
    const update = axios
    .put(`http://localhost:5000/tasks/${id}`, {
      name,
      task,
      progress: progress
    }, { headers: { Authorization: token } });
    return update;
  }

  function deleteTask(id) {
    const token = localStorage.getItem('token');
    const remove = axios
    .delete(`http://localhost:5000/tasks/${id}`, 
      { headers: { Authorization: token } });
    return remove;
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
    confirm, 
    setConfirm,
    loginInput,
    passwordInput,
    userExists,
    usernameInput,
    createUser,
    confirmInput,
    clearInputs,
    getTasks,
    tasks,
    setTasks,
    name,
    setName,
    task,
    setTask,
    createTask,
    nameInput,
    taskInput,
    updateTask,
    deleteTask,
    progress,
    setProgress,
    progressInput
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object
}

export default Provider;
