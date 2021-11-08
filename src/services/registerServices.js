const resgisterModel = require('../models/registerModel');

const create = async (name, email, password) => {
  const user = await resgisterModel.create(name, email, password);
  return { user };
};

module.exports = { create };
