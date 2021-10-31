const serviceTasks = require('../services/serviceTasks');

const getAll = async (_req, res) => {
  const tasks = await serviceTasks.getAll();

  return res.status(200).json(Object.values(tasks));
};

const getByName = async (req, res) => {
  const { q } = req.query;
  const response = await serviceTasks.getAll();
  const filterTasks = response.filter((r) => r.name.includes(q));
  console.log(filterTasks);

  return res.status(200).json({ filterTasks });
}

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

const remove = async (req, res) => {
  const { id } = req.params;

  await serviceTasks.remove(id);

  return res.status(200).json({ message: 'Successfully deleted.' });
}

module.exports = { getAll, getByName, create, update, remove };
