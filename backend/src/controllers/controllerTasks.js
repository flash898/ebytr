const serviceTasks = require('../services/serviceTasks');

const getAll = async (_req, res) => {
  const tasks = await serviceTasks.getAll();

  return res.status(200).json(Object.values(tasks));
};

const create = async (req, res) => {
  const task = req.body;

  const tasks = await serviceTasks.create(task, req.user.username);

  return res.status(201).json({ task: tasks });
};

module.exports = { getAll, create };
