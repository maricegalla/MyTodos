const todoModel = require('../models/todoModel');

const createTask = async (user, task, status) => {
  const createdTask = await todoModel.createTask(user, task, status);
  return createdTask;
};

const getAllTasks = async (user) => {
  const tasks = await todoModel.getAllTasks(user);
  return tasks;
};

const getAllTasksStatus = async (user) => {
  const tasks = await todoModel.getAllTasksStatus(user);
  return tasks;
};

const getAllTasksDate = async (user) => {
  const tasks = await todoModel.getAllTasksDate(user);
  return tasks;
};

const getById = async (id) => {
  const task = await todoModel.getById(id);
  return task;
};

module.exports = { createTask,
  getAllTasks,
  getAllTasksStatus,
  getAllTasksDate,
  getById };
