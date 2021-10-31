const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const newTask = (data, username) => {
  const { _id, name, task  } = data;
  return {
    _id,
    name,
    task,
    username,
   };
  };

const getAll = async () => 
  connection()
    .then((db) => db.collection('tasks').find().toArray());

const create = async ({ name, task }, username) =>
  connection()
    .then((db) => db.collection('tasks').insertOne({ name, task, username }))
    .then((result) => newTask({ _id: result.insertedId, name, task }, username));

const update = async (id, { name, task }, username) =>
  connection()
    .then((db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { name, task, username }}))
    .then(() => newTask({ _id: id, name, task }, username));

module.exports = { getAll, create, update };
