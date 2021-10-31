const route = require('express').Router();
const User = require('../controllers/controllerUser');
const Login = require('../controllers/controllerLogin');
const Task = require('../controllers/controllerTasks');

const { validUsername, validEmail, validPassword } = require('../middlewares/validUser');
const { validLogin } = require('../middlewares/validLogin');
const { validToken } = require('../middlewares/validToken');
const { validName, validTask } = require('../middlewares/validTask');

route.get('/users', User.getAll);
route.post('/users', validUsername, validEmail, validPassword, User.create);

route.post('/login', validLogin, Login.login);

route.get('/tasks', Task.getAll);
route.post('/tasks', validName, validTask, validToken, Task.create);

module.exports = route;