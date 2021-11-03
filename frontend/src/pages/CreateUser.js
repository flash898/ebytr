import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

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

  function usernameInput({ target }) {
    setUsername(target.value);
    ableButton();
  }

  function clearInputs() {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirm('');
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="user"
          placeholder="username"
          onChange={ usernameInput }
          value={ username }
        />
        <input
          type="text"
          name="email"
          placeholder="e-mail"
          onChange={ loginInput }
          value={ email }
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={ passwordInput }
          value={ password }
        />
        <button
          type="button"
          name="create"
          onClick={ () => createUser(username, email, password) }
          disabled={ status }
        >
          Create User
        </button>
        <button
          type="button"
          name="clear"
          onClick={ clearInputs }
        >
          Clear
        </button>
        <Link to="/">
          <button
            type="button"
            name="back"
          >
            Back to Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CreateUser;
