const serviceUser = require('../services/serviceUser');

const getAll = async (_req, res) => {
  const users = await serviceUser.getAll();

  return res.status(200).json({ users });
};

module.exports = { getAll };