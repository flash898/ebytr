const validName = async (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;

  const regex = /\w+@\w+.com(.br)?/;
  if (!email || email === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  if (!regex.test(email)) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  if(password.length < 6) {
    return res.status(400).json({ message: 'Password must have 6 or more characters.' });
  }

  next();
};

module.exports = { validName, validEmail, validPassword };
