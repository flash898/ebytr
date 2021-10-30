const modelUser = require('../models/modelUser');

const getAll = async () => modelUser.getAll();

const create = async (newUser) => modelUser.create(newUser);

module.exports = { getAll, create };
