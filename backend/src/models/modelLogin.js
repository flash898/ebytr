const { connection } = require('./connection');

const findUser = async (email) => 
  connection()
    .then((db) => db.collection('users').findOne({ email }));

module.exports = { findUser };