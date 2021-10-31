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

const update = async (req, res) => {
  const { id } = req.params;
  const updateTask = req.body;

  const task = await serviceTasks.update(id, updateTask, req.user.username);

  return res.status(200).json(task);
}

module.exports = { getAll, create, update };
