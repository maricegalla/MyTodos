const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_NAME = 'Ebytry';
const MONGO_DB_URL = 'mongodb://localhost:27017/Ebytr';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

module.exports = connection;
