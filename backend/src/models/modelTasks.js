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

const getByName = async (name) =>
  connection()
    .then((db) => db.collection('tasks').findOne({ name }))
    .then((result) => newTask({ _id: result.insertedId, name, task }, username))
    .catch(() => null);

const create = async ({ name, task }, username) =>
  connection()
    .then((db) => db.collection('tasks').insertOne({ name, task, username }))
    .then((result) => newTask({ _id: result.insertedId, name, task }, username));

const update = async (id, { name, task }, username) =>
  connection()
    .then((db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { name, task, username }}))
    .then(() => newTask({ _id: id, name, task }, username));

const remove = async (id) =>
  connection()
    .then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));

module.exports = { getAll, getByName, create, update, remove };
