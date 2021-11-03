import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    token,
    user,
    status,
    setStatus,
    userExists,
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

  return (
    <div>
      { user.users && <Redirect to="/tasks" /> }
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={ loginInput }
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={ passwordInput }
        />
        <button
          type="button"
          disabled={ status }
          onClick={ () => userExists(email, password, token) }
        >
          Entrar
        </button>
        <Link to="/users/create">
          Criar Usuário
        </Link>
      </form>
    </div>
  );
};

export default Login;
