const moment = require('moment');
const getConnection = require('./connection');

const createTask = async (user, task, status) => {
  const db = await getConnection();
  const createdAt = moment().format('DD-MM-YYYY HH:mm:ss');
  const result = await db.collection('todos').insertOne({ user, task, status, createdAt });
  return { createdTask: { user, task, status, _id: result.insertedId, createdAt } };
};

module.exports = { createTask };
