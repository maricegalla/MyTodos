const { Router } = require('express');
const {
  registerValidator,
} = require('../utils/middlewares');
const registerController = require('../controllers/registerController');

const router = Router();

router.post('/',
  registerValidator,
  registerController.createUser);

module.exports = router;
