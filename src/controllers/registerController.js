const resgisterService = require('../services/registerServices');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  const { error, user } = await resgisterService.create(name, email, password);
  if (error) return res.status(error.status).json(error.message);
  return res.status(201).json(user);
};

module.exports = { create };
