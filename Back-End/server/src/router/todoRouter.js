const { Router } = require('express');
const todoController = require('../controllers/todoController');

const router = Router();

router.post('/',
  todoController.createTask);

module.exports = router;
