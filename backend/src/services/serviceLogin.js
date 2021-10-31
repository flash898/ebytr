const jwt = require('jsonwebtoken');
const modelLogin = require('../models/modelLogin');

const secret = 'meusecret123';

const login = async (email) => {
  const user = await modelLogin.findUser(email);
  const { _id, name, role } = user;

  const token = jwt.sign({ id: _id, name, role }, secret);
  return token;
};

module.exports = { login };
