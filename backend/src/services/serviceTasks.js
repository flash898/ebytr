const modelTasks = require('../models/modelTasks');

const getAll = async () => modelTasks.getAll();

const create = async (newTask, username) => modelTasks.create(newTask, username);

module.exports = { getAll, create };
