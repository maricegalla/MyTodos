const {
  createError,
} = require('./errors');

const nameValidator = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!email || emailPattern.test(email) === false) {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length >= 6) {
    return res.status(createError.error.status).json({ message: createError.error.message });
  }

  next();
};

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
};
