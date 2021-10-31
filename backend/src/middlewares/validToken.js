const jwt = require('jsonwebtoken');

const secret = 'meusecret123';

const validToken = async (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'jwt malformed' });
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
      return res.status(401).json({ message: err.message });
  } 
};

module.exports = { validToken };