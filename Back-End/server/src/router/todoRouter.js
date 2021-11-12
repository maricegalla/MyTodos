const { Router } = require('express');
const todoController = require('../controllers/todoController');
const { creatTaskValidator } = require('../utils/middlewares');
const { tokenAuth } = require('../auth/tokenAuth');

const router = Router();

router.post('/',
  tokenAuth,
  creatTaskValidator,
  todoController.createTask);

// router.get('/',
//   tokenAuth,
//   todoController.getAllTasks);

// router.get('/status',
//   tokenAuth,
//   todoController.getAllTasksStatus);

router.get('/',
  tokenAuth,
  todoController.getAllTasksDate);

router.get('/:id',
  tokenAuth,
  todoController.getById);

// router.put('/:id',
//   tokenAuth,
//   todoController.editById);

// router.delete('/:id',
//   tokenAuth,
//   todoController.deleteById);

module.exports = router;
