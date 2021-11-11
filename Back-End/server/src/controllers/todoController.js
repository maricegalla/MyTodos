const todoServices = require('../services/todoServices');
const { verify } = require('../auth/tokenAuth');

const createTask = async (req, res) => {
  const { task, status } = req.body;
  const { authorization } = req.headers;

  const payload = verify(authorization);
  const user = payload.email;
  await todoServices.createTask(user, task, status);
  return res.status(201).json('Task successfully created');
};

const getAllTasks = async (req, res) => {
  const { authorization } = req.headers;
  const payload = verify(authorization);
  const user = payload.email;

  const tasks = await todoServices.getAllTasks(user);
  return res.status(200).json(tasks);
};

const getAllTasksStatus = async (req, res) => {
  const { authorization } = req.headers;
  const payload = verify(authorization);
  const user = payload.email;

  const tasks = await todoServices.getAllTasksStatus(user);
  return res.status(200).json(tasks);
};

const getAllTasksDate = async (req, res) => {
  const { authorization } = req.headers;
  const payload = verify(authorization);
  const user = payload.email;

  const tasks = await todoServices.getAllTasksDate(user);
  return res.status(200).json(tasks);
};

module.exports = { createTask, getAllTasks, getAllTasksStatus, getAllTasksDate };
