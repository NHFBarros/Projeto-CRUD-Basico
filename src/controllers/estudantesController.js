const Estudantes = require('../models/estudantesModel');

module.exports = {
    async listar(req, res) {
        try {
            const dados = await Estudantes.getAll();
            res.render('index', { estudantes: dados });
        } catch (err) {
            res.status(500).send(err);
        }
    },

    async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const estudante = await Estudantes.getById(id);
            res.json(estudante);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    async criar(req, res) {
        try {
            await Estudantes.create(req.body);
            res.redirect("/");
        } catch (err) {
            res.status(500).send(err);
        }
    },

    async atualizar(req, res) {
        try {
            const id = req.params.id;
            const atualizado = await Estudantes.update(id, req.body);
            res.json(atualizado);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    async remover(req, res) {
        try {
            const id = req.params.id;
            await Estudantes.delete(id);
            res.json({ message: "removido" });
        } catch (err) {
            res.status(500).send(err);
        }
    }
};
