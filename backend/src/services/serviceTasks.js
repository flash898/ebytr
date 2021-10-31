const modelTasks = require('../models/modelTasks');

const getAll = async () => modelTasks.getAll();

const create = async (newTask, username) => modelTasks.create(newTask, username);

const update = async (id, updateTask, username) => modelTasks.update(id, updateTask, username);

module.exports = { getAll, create, update };
