const getConnection = require('./connection');

const createUser = async (name, email, password) => {
  const db = await getConnection();
  const result = await db.collection('users').insertOne({ name, email, password });
  return { user: { name, email, _id: result.insertedId } };
};

module.exports = { createUser };
