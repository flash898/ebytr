const modelLogin = require('../models/modelLogin');

const validLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' }); 
  }

  const user = await modelLogin.findUser(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  next(); 
};

module.exports = { validLogin };
