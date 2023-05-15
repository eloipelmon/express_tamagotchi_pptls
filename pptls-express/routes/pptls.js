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
   connection.query('SELECT * FROM pptls', (error, results, fields) => {
     if (error) {
       res.status(500).json({ error: error.message });
     } else {
       res.json(results);
     }
   });
 });

router.post('/', (req, res) => {
  const partidaPPTLS = {
    fecha: new Date(),
    ganador: req.body.ganador
  };

  connection.query('INSERT INTO pptls SET ?', partidaPPTLS, (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.json({ id: results.insertId });
    }
  });
});

module.exports = router;
