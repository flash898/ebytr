import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import CreateUser from './pages/CreateUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/tasks" component={ Tasks } />
        <Route exact path="/users/create" component={ CreateUser } />
      </Switch>
    </div>
  );
}

export default App;
