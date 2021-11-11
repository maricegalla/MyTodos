const emailError = {
  error: {
    message: 'Email already registered',
    status: 409 },
};

const loginError = {
  error: {
    message: 'All fields must be filled',
    status: 400 },
};

const credentialsError = {
  error: {
    message: 'Incorrect username or password',
    status: 401 },
};

const tokenNotFoundError = {
  error: {
    status: 401,
    message: 'Token not found',
  },
};

const invalidTokenError = {
  error: {
    status: 401,
    message: 'Expired or invalid token',
  },
};

module.exports = {
  emailError,
  loginError,
  credentialsError,
  tokenNotFoundError,
  invalidTokenError,
};
