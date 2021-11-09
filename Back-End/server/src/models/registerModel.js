const getConnection = require('./connection');

const createUser = async (name, email, password) => {
  const db = await getConnection();
  const result = await db.collection('users').insertOne({ name, email, password });
  return { user: { name, email, _id: result.insertedId } };
};

const findByEmail = async (email) => {
  const db = await getConnection();
  const user = await db.collection('users').findOne({ email });
  return user;
};

module.exports = {
  createUser,
  findByEmail };
