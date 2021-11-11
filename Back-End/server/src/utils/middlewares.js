const registerModel = require('../models/registerModel');
const {
  createError,
  emailError,
  loginError,
  credentialsError,
} = require('./errors');

const registerValidator = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  if (!email) {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  const findByEmail = await registerModel.findByEmail(email);
  if (findByEmail) {
    return res.status(emailError.error.status).json({ message: emailError.error.message });
  }

  if (!password) {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  next();
};

const loginValidator = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
  }

  const findByEmail = await registerModel.findByEmail(email);
  if (!findByEmail || password !== findByEmail.password) {
    return res.status(credentialsError.error.status).json({ message: credentialsError.error.message });
  }

  next();
};

module.exports = {
  registerValidator,
  loginValidator,
};
