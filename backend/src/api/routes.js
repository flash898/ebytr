const route = require('express').Router();
const User = require('../controllers/controllerUser');
const Login = require('../controllers/controllerLogin');

const { validName, validEmail, validPassword } = require('../middlewares/validUser');
const { validLogin } = require('../middlewares/validLogin');

route.get('/users', User.getAll);
route.post('/users', validName, validEmail, validPassword, User.create);

route.post('/login', validLogin, Login.login);

module.exports = route;