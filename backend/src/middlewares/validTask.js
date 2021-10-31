const validName = async (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validTask = async (req, res, next) => {
  const { task } = req.body;
  if (!task || task === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

module.exports = { validName, validTask };
