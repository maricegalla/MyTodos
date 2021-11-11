const jwt = require('jsonwebtoken');
const { tokenNotFoundError, invalidTokenError } = require('../utils/errors');

require('dotenv').config();

const secret = process.env.SECRET;

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(tokenNotFoundError.error.status)
      .json({ message: tokenNotFoundError.error.message });
  }
  try {
    const payload = verify(authorization);
    req.payload = payload;
    return next();
  } catch (error) {
    res.status(invalidTokenError.error.status).json({ message: invalidTokenError.error.message });
  }
};

module.exports = { tokenAuth, verify };
