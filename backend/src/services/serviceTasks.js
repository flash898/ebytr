const modelTasks = require('../models/modelTasks');

const getAll = async () => modelTasks.getAll();

const getByName = async (name) => modelTasks.getByName(name);

const create = async (newTask, username) => modelTasks.create(newTask, username);

const update = async (id, updateTask, username) => modelTasks.update(id, updateTask, username);

const remove = async (id) => modelTasks.remove(id);

module.exports = { getAll, getByName, create, update, remove };
