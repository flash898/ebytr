const serviceUser = require('../services/serviceUser');

const getAll = async (_req, res) => {
  const users = await serviceUser.getAll();

  return res.status(200).json({ users });
};

const create = async (req, res) => {
  const user = req.body;

  const users = await serviceUser.create(user);

  res.status(201).json({ user: users });
};

module.exports = { getAll, create };