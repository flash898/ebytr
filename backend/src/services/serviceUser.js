const modelUser = require('../models/modelUser');

const getAll = async () => modelUser.getAll();

module.exports = { getAll };
