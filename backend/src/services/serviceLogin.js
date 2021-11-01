const jwt = require('jsonwebtoken');
const modelLogin = require('../models/modelLogin');

const secret = 'meusecret123';

const login = async (email) => {
  const user = await modelLogin.findUser(email);
  const { _id, username, role } = user;

  const token = jwt.sign({ id: _id, username, role }, secret);
  return { token, users: { _id, username, email, role } };
};

module.exports = { login };
