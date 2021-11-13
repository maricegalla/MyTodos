const registerModel = require('../models/registerModel');
const { createToken } = require('../auth/tokenCreation');

const createUser = async (name, email, password) => {
  const user = await registerModel.createUser(name, email, password);
  return user;
};

const loginUser = async (email, _password) => {
  const user = await registerModel.findByEmail(email);
  const token = createToken(user);
  return token;
};

module.exports = {
  createUser,
  loginUser,
};
