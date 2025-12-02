const express = require('express');
const router = express.Router();
const Controller = require('../controllers/estudantesController');
const Estudantes = require('../models/estudantesModel');

router.get('/', Controller.listar);

router.get('/add', (req, res) => {
    res.render('add');
});

router.get('/update/:id', async (req, res) => {
    const estudante = await Estudantes.getById(req.params.id);
    res.render('update', { est: estudante });
});

router.post('/', Controller.criar);

router.post('/update/:id', async (req, res) => {
    await Estudantes.update(req.params.id, req.body);
    res.redirect('/');
});

router.post('/deletar/:id', async (req, res) => {
    await Estudantes.delete(req.params.id);
    res.redirect('/');
});

module.exports = router;