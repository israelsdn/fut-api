const express = require('express');
const jogadoresController = require('./controllers/jogadoresControllers');
const router = express.Router();

router.get('/jogadores', jogadoresController.getAll);

module.exports = router;