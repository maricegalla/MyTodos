const resgisterServices = require('../services/registerServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await resgisterServices.createUser(name, email, password);
  return res.status(201).json('User successfully created');
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { token } = await resgisterServices.loginUser(email, password);
  return res.status(200).json({ token });
};

module.exports = {
  createUser,
  loginUser,
};
