const todoModel = require('../models/todoModel');

const createTask = async (user, task, status) => {
  const createdTask = await todoModel.createTask(user, task, status);
  return createdTask;
};

module.exports = { createTask };
