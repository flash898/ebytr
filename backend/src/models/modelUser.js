const connection = require('./connection');

const getAll = async () =>
  connection()
    .then((db) => db.collection('users').find().toArray());

module.exports = { getAll };
