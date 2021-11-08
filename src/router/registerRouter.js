const { Router } = require('express');

const router = Router();

module.exports = router;

router.post('/', (_req, res) => {
  res.status(200).json('Usuário criado com sucesso');
});
