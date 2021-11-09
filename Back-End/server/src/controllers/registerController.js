const resgisterService = require('../services/registerServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await resgisterService.createUser(name, email, password);
  return res.status(201).json('Usuário criado com sucesso');
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { token } = await resgisterService.loginUser(email, password);
  return res.status(200).json({ token });
};

module.exports = {
  createUser,
  loginUser,
};
