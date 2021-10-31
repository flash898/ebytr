const { connection } = require('./connection');

const newUser = (userData) => {
  const { _id, username, email, password, role } = userData;
  return {
    _id,
    username,
    email,
    password,
    role,
   };
  };

const getAll = async () =>
  connection()
    .then((db) => db.collection('users').find().toArray());

const create = async ({ username, email, password }) => 
  connection()
    .then((db) => db.collection('users').insertOne({ username, email, password, role: 'user' }))
    .then((result) => newUser({ _id: result.insertedId, username, email, role: 'user' }));

module.exports = { getAll, create };
