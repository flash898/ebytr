import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import '../styles/CreateUser.css';

const CreateUser = () => {
  const {
    username,
    email,
    password,
    status,
    setStatus,
    createUser,
    setEmail,
    setPassword,
    setUsername,
  } = useContext(MyContext);

  function ableButton() {
    const numMin = 5;
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

  function usernameInput({ target }) {
    setUsername(target.value);
    ableButton();
  }

  function clearInputs() {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <Header disable />
      <div className="form-div">
        <h3 className="title-create">Enter your data</h3>
        <form>
          <input
            type="text"
            name="user"
            className="form-control control-create"
            placeholder="Username"
            onChange={ usernameInput }
            value={ username }
          />
          <input
            type="text"
            name="email"
            className="form-control control-create"
            placeholder="Example: email@email.com"
            onChange={ loginInput }
            value={ email }
          />
          <input
            type="password"
            name="password"
            className="form-control control-create"
            placeholder="Password with 6 or more characters"
            onChange={ passwordInput }
            value={ password }
          />
          <button
            type="button"
            name="create"
            className="btn btn-success btn-create"
            onClick={ () => createUser(username, email, password) }
            disabled={ status }
          >
            Create User
          </button>
          <button
            type="button"
            name="clear"
            className="btn btn-warning btn-create"
            onClick={ clearInputs }
          >
            Clear
          </button>
          <Link to="/">
            <button
              type="button"
              className="btn btn-warning btn-create"
              name="back"
            >
              Back to Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
