import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import '../styles/Login.css';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
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
      <Header disable />
      <div className="form-label">
        { user.users && <Redirect to="/tasks" /> }
        <form>
          <h2>Login to continue</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={ loginInput }
            />
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={ passwordInput }
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            disabled={ status }
            onClick={ () => userExists(email, password) }
          >
            Entrar
          </button>
          <Link to="/users/create" className="btn btn-warning">
            Criar Usuário
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
