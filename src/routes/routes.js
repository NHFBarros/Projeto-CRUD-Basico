const express = require('express');
const router = express.Router();
const Controller = require('../controllers/estudantesController');

router.get('/', Controller.listar);
router.get('/:id', Controller.buscarPorId);
router.post('/', Controller.criar);
router.put('/:id', Controller.atualizar);
router.delete('/:id', Controller.remover);

module.exports = router;