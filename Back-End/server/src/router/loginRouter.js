const { Router } = require('express');

const {
  loginValidator,
} = require('../utils/middlewares');
const registerController = require('../controllers/registerController');

const router = Router();

router.post('/',
  loginValidator,
  registerController.loginUser);
module.exports = router;
