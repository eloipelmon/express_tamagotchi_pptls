const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tamagotchi-pptls'
});

connection.connect();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM tamagotchi', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.json(results);
    }
  });
});

router.post('/', (req, res) => {
  const tamagotchi = {
    causa_muerte: req.body.causa_muerte,
    fecha: new Date()
  };

  connection.query('INSERT INTO tamagotchi SET ?', tamagotchi, (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.json({ id: results.insertId });
    }
  });
});


module.exports = router;