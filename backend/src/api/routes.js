const route = require('express').Router();
const User = require('../controllers/controllerUser');
const { validName, validEmail, validPassword } = require('../middlewares/validUser');

route.get('/users', User.getAll);
route.post('/users', validName, validEmail, validPassword, User.create);

module.exports = route;