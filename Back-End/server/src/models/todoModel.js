const { ObjectId } = require('bson');
const moment = require('moment');
const getConnection = require('./connection');

const createTask = async (user, task, status) => {
  const db = await getConnection();
  const createdAt = moment().format('DD-MM-YYYY HH:mm:ss');
  const result = await db.collection('todos').insertOne({ user, task, status, createdAt });
  return { createdTask: { user, task, status, _id: result.insertedId, createdAt } };
};

const getAllTasksDate = async (user) => {
  const db = await getConnection();
  const result = await db.collection('todos').find({ user }).sort({ createdAt: 1 }).toArray();
  return result;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  const result = await db.collection('todos').findOne({ _id: ObjectId(id) });
  return result;
};

const deleteById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  await db.collection('todos').deleteOne({ _id: ObjectId(id) });
};

const editById = async (id, task, status) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  await db.collection('todos').updateOne({ _id: ObjectId(id) }, { $set: { task, status } });
};

module.exports = { createTask,
  getAllTasksDate,
  getById,
  deleteById,
  editById };
