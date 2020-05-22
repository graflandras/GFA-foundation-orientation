'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());
app.use('/assets', express.static('assets'));
app.use('/about/assets', express.static('static'));
app.listen(PORT);
console.log(`Now listening on port ${PORT}`)


const conn = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/index.html'));
});

app.post('/api/orders', (req, res) => {
  const { name, address, base, topping } = req.body;
  console.log(req.body);
  let isVegetarian = 0;
  if (topping == 'Smoked tofu') {
    isVegetarian = 1;
  }
  const sqlQueryInsert = `INSERT INTO orders (name, address, base, topping, isVegetarian, status) VALUES ('${name}', '${address}', '${base}', '${topping}', '${isVegetarian}', 'ordered');`;
  conn.query(sqlQueryInsert, (err, data) => {
    if (err) {
      res.status(400).json({
        error: `${err}`
      });
      return;
    } else {
      res.status(200).json({
        "id": data.insertId,
        "name": name,
        "address": address,
        "base": base,
        "topping": topping,
        "status": 'ordered'
      });
    }
  });
});

app.get('/api/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  conn.query('SELECT id, name, address, base, topping, status FROM orders;', (err, rows) => {
    const result = rows.find(row => row.id == orderId);
    if (result === undefined) {
      res.status(404).send();
      return;
    }
    res.json(result);
  });
});

app.get(`/api/orders`, (req, res) => {
  const { type, status } = req.query;
  if ((type != 'all') && (type != 'vegetarian') && (status != 'ordered') && (status != 'inprogress') && (status != 'done')) {
    res.status(400).send(`nemjóóóóóóóó`);
    return;
  } else {
    let checkvega = 0;
    if (type == 'all') {
      checkvega = 0;
    } else {
      checkvega = 1;
    }
    conn.query(`SELECT * FROM orders WHERE isVegetarian = '${checkvega}' AND status = '${status}';`, (err, data) => {
      const result = data.find(row => row.isVegetarian == checkvega && row.status == status);
      if (result === undefined) {
        res.status(400).send();
        return;
      } else {
        res.json(data);
      }
    });
  }
});

app.patch('/api/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  if ((status !== 'ordered') && (status !== 'inprogress') && (status !== 'done')) {
    res.status(400).send(`nem jó a státuszzzzzzzzzzzz`);
    return;
  }
  conn.query(`SELECT * FROM orders WHERE id = '${orderId}';`, (err, rows) => {
    const result = rows.find(row => row.id == orderId);
    if (result === undefined) {
      res.status(400).send(`nincs ilyen ájdí`);
      return;
    } else {
      conn.query(`UPDATE orders SET status ='${status}' WHERE id = '${orderId}';`, (err, rows) => {
        if (err) {
          res.status(400).send();
          return;
        } else {
          res.status(200).json({
            message: 'succesfully modified record'
          });
        }
      });
    }
  });
});

