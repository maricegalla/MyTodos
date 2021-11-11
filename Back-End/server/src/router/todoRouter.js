const { Router } = require('express');
const todoController = require('../controllers/todoController');
const { creatTaskValidator } = require('../utils/middlewares');
const { tokenAuth } = require('../auth/tokenAuth');

const router = Router();

router.post('/',
  tokenAuth,
  creatTaskValidator,
  todoController.createTask);

module.exports = router;
