const { connection } = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM illustration";
    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot get the illustrations' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.get('/oldest', (req, res) => {
    const sql = "SELECT * FROM illustration ORDER BY date_creation ASC";
    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot get the oldest illustrations' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.get('/latest', (req, res) => {
    const sql = "SELECT * FROM illustration ORDER BY date_creation DESC";
    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot get the latest illustrations' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.get('/:color/:category/:material', (req, res) => {
    const sql = "SELECT * FROM illustration WHERE color=? AND category=? AND material=?";
    connection.query(sql, [req.params.color, req.params.category, req.params.material], (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot get the illustrations' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.post('/', (req, res) => {
    const sql = "INSERT INTO illustration SET ?";
    connection.query(sql, req.body, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: 'Cannot add your illustration' });
        } else {
            res.status(201).json({ id: results.insertId, ...req.body });
        }
    });
});

router.delete('/:id', (req, res) => {
    const sql = "DELETE FROM illustration WHERE id=?";
    connection.query(sql, req.params.id, (err, results) => {
        if (err) {
            res.status(500).send({ errorMessage: `Cannot delete this illustration id: ${req.params.id}` });
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;