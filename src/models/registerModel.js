const getConnection = require('./connection');

const create = async (name, email, password) => {
  const db = await getConnection();
  const result = await db.collection('Users').insertOne({ name, email, password });
  return { _id: result.insertedId, name, email };
};

module.exports = { create };
