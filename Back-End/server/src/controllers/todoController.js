const todoServices = require('../services/todoServices');
const { verify } = require('../auth/tokenAuth');

const createTask = async (req, res) => {
  const { task, status } = req.body;
  const { authorization } = req.headers;

  const payload = verify(authorization);
  const user = payload.email;
  const { createdTask } = await todoServices.createTask(user, task, status);
  // return res.status(201).json('Task successfully created');
  return res.status(201).json({ createdTask });
};

module.exports = { createTask };
