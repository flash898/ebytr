const serviceLogin = require('../services/serviceLogin');

const login = async (req, res) => {
  const { email } = req.body;

  const token = await serviceLogin.login(email);
  return res.status(200).json({ token });
};

module.exports = { login };
