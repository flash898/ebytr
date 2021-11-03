const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const newTask = (data, username) => {
  const { _id, name, task, createAt, progress } = data;
  return {
    _id,
    name,
    task,
    createAt,
    progress,
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

const create = async ({ name, task, progress }, username) => {
  const createAt = new Date().toLocaleString();
  return  connection()
    .then((db) => db.collection('tasks').insertOne({ name, task, progress, createAt, username }))
    .then((result) => newTask({ _id: result.insertedId, name, task, progress, createAt }, username));
  }

const update = async (id, { name, task, progress }, username) =>
  connection()
    .then((db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { name, task, progress, username }}))
    .then(() => newTask({ _id: id, name, task, progress }, username));

const remove = async (id) =>
  connection()
    .then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));

module.exports = { getAll, getByName, create, update, remove };
