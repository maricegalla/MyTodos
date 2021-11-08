const resgisterModel = require('../models/registerModel');

const createUser = async (name, email, password) => {
  const user = await resgisterModel.createUser(name, email, password);
  return user;
};

module.exports = { createUser };
