const { Router } = require('express');
const {
  nameValidator,
  emailValidator,
  passwordValidator,
} = require('../utils/middlewares');
const registerController = require('../controllers/registerController');

const router = Router();

router.post('/',
  nameValidator,
  emailValidator,
  passwordValidator,
  registerController.createUser);

module.exports = router;
