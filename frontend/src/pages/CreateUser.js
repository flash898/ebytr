import React, { useContext } from 'react';
import MyContext  from '../context/MyContext';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  const { 
    username,
    email,
    password,
    confirm,
    status,
    setStatus,
    usernameInput,
    loginInput,
    passwordInput,
    confirmInput,
    createUser,
    clearInputs } = useContext(MyContext);
  
  if (password !== confirm) setStatus(true);

  return (
    <div>
      <form>
        <input
          type='text'
          name='user'
          placeholder='username'
          onChange={ usernameInput }
          value={ username }
        />
        <input 
          type='text'
          name='email'
          placeholder='e-mail'
          onChange={ loginInput }
          value={ email }
        />
        <input
          type='password' 
          name='password' 
          placeholder='password'
          onChange={ passwordInput }
          value={ password }
        />
        <input
          type='password'
          name='confirm-password'
          placeholder='confirm password'
          onChange={ confirmInput }
          value={ confirm }
        />
        <button 
          type='button'
          name='create'
          onClick={ () => createUser(username, email, password) }
          disabled={ status }
        >
          Create User
        </button>
        <button 
          type='button' 
          name='clear'
          onClick={ clearInputs }
        >
          Clear
        </button>
        <Link to='/'>
          <button 
            type='button'
            name='back'
          >
            Back to Login
          </button>
        </Link>
      </form>
    </div>
  )
}

export default CreateUser
