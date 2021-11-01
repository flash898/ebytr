import React, { useContext } from 'react'
import MyContext  from '../context/MyContext';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
  const { 
    email,
    password,
    token,
    user,
    status,
    loginInput,
    passwordInput,
    userExists
  } = useContext(MyContext);

  return (
    <div>
      { user.users && <Redirect to='/tasks'/> }
      <form>
        <h1>Login</h1>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={ loginInput }
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={ passwordInput }
        />
          <button
            type='button'
            disabled={ status }
            onClick={ () => userExists(email, password, token) }
          >
            Entrar
          </button>
        <Link to='/users/create'>
            Criar Usuário
        </Link>
      </form>
    </div>
  )
}

export default Login;
