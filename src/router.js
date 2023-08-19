const express = require('express');
const jogadoresController = require('./controllers/jogadoresControllers');
const router = express.Router();

router.get('/', (req, res) => res.send('Aqui não tem nada'));
router.get('/jogadores', jogadoresController.getAll);
router.post('/jogadores', jogadoresController.postJogador);

module.exports = router;