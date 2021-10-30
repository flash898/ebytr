const { connection } = require('./connection');

const newUser = (userData) => {
  const { _id, name, email, password, role } = userData;
  return {
    _id,
    name,
    email,
    password,
    role,
   };
  };

const getAll = async () =>
  connection()
    .then((db) => db.collection('users').find().toArray());

const create = async ({ name, email, password }) => 
  connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role: 'user' }))
    .then((result) => newUser({ _id: result.insertedId, name, email, role: 'user' }));

module.exports = { getAll, create };
