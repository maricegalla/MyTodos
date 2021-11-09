/* eslint-disable max-len */
const registerModel = require('../models/registerModel');
const {
  createError,
  emailError,
  loginError,
  credentialsError,
} = require('./errors');

const nameValidator = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  next();
};

const emailValidator = async (req, res, next) => {
  const { email } = req.body;

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!email || emailPattern.test(email) === false) {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  const findByEmail = await registerModel.findByEmail(email);
  if (findByEmail) {
    return res.status(emailError.error.status).json({ message: emailError.error.message });
  }

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
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
  nameValidator,
  emailValidator,
  passwordValidator,
  loginValidator,
};
