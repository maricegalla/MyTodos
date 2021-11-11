const todoServices = require('../services/todoServices');

const createTask = async (req, res) => {
  const { user, task, status } = req.body;
  const { createdTask } = await todoServices.createTask(user, task, status);
  // return res.status(201).json('Task successfully created');
  return res.status(201).json({ createdTask });
};

module.exports = { createTask };
