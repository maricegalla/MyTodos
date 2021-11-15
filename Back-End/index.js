const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const loginRouter = require('./server/src/router/loginRouter');
const registerRouter = require('./server/src/router/registerRouter');
const todoRouter = require('./server/src/router/todoRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`💃🏻Mãe tá on na porta ${PORT}!🤘🏻`);
});

app.use('/', loginRouter);

app.use('/register', registerRouter);

app.use('/todo', todoRouter);
