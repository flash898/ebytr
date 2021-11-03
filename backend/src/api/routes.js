const route = require('express').Router();
const User = require('../controllers/controllerUser');
const Login = require('../controllers/controllerLogin');
const Task = require('../controllers/controllerTasks');

const { validUsername, validEmail, validPassword } = require('../middlewares/validUser');
const { validLogin } = require('../middlewares/validLogin');
const { validToken } = require('../middlewares/validToken');
const { validName, validTask } = require('../middlewares/validTask');

route.get('/users', User.getAll);
route.post('/users/create', validUsername, validEmail, validPassword, User.create);

route.post('/login', validLogin, Login.login);

route.get('/tasks', Task.getAll);
route.get('/tasks/search', Task.getByName);
route.post('/tasks/create', validName, validTask, validToken, Task.create);
route.put('/tasks/:id', validName, validTask, validToken, Task.update);
route.delete('/tasks/:id', validToken, Task.remove);

module.exports = route;