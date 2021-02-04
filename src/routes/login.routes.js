const { connection } = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM admin";
    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot get the users' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.post('/', (req, res) => {
    const sql = "INSERT INTO admin SET ?";
    connection.query(sql, req.body, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot add a user' });
        } else {
            res.status(201).json({ id: results.insertId, ...req.body });
        }
    });
});

router.delete('/admin/:id', (req, res) => {
    const sql = "DELETE FROM admin WHERE id=?";
    connection.query(sql, req.params.id, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: `Cannot delete this illustration id: ${req.params.id}` });
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;