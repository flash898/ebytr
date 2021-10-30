const route = require('express').Router();
const User = require('../controllers/controllerUser');

route.get('/', User.getAll);

module.exports = route;