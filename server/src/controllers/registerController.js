const resgisterService = require('../services/registerServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await resgisterService.createUser(name, email, password);
  return res.status(201).json('Usuário criado com sucesso');
};

module.exports = { createUser };
