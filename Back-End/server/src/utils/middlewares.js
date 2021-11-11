const registerModel = require('../models/registerModel');
const {
  emailError,
  loginError,
  credentialsError,
} = require('./errors');

const registerValidator = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
  }

  if (!email) {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
  }

  const findByEmail = await registerModel.findByEmail(email);
  if (findByEmail) {
    return res.status(emailError.error.status).json({ message: emailError.error.message });
  }

  if (!password) {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
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

const creatTaskValidator = async (req, res, next) => {
  const { user, task, status } = req.body;

  if (!user || typeof user !== 'string') {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
  }

  if (!task) {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
  }

  if (!status) {
    return res.status(loginError.error.status).json({ message: loginError.error.message });
  }

  next();
};

module.exports = {
  registerValidator,
  loginValidator,
  creatTaskValidator,
};
