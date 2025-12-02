const db = require('../db');

const EstudantesModel = {
    
    getAll() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM estudantes", (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    },

    getById(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM estudantes WHERE id = ?", [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    },

    create({ nome, idade, serie, telefone }) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO estudantes (nome, idade, serie, telefone) VALUES (?, ?, ?, ?)";
            const values = [nome, idade, serie, telefone];

            db.query(sql, values, (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, nome, idade, serie, telefone });
            });
        });
    },

    update(id, { nome, idade, serie, telefone }) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE estudantes 
                SET nome = ?, idade = ?, serie = ?, telefone = ?
                WHERE id = ?
            `;

            const values = [nome, idade, serie, telefone, id];

            db.query(sql, values, (err) => {
                if (err) return reject(err);
                resolve({ id, nome, idade, serie, telefone });
            });
        });
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM estudantes WHERE id = ?", [id], (err) => {
                if (err) return reject(err);
                resolve({ message: `Estudante ${id} removido.` });
            });
        });
    }
};

module.exports = EstudantesModel;
