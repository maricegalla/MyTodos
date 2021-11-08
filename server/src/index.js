const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('./router/loginRouter');
const registerRouter = require('./router/registerRouter');
const todoRouter = require('./router/todoRouter');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.listen(PORT, () => {
  console.log(`💃🏻Mãe tá on na porta ${PORT}!🤘🏻`);
});

app.use('/', loginRouter);

app.use('/register', registerRouter);

app.use('/todo', todoRouter);
