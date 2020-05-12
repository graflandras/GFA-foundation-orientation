'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const path = require('path');
app.use('/assets', express.static('assets'));

// CONFIGURATION
const conn = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// CONNECT
conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

app.listen(PORT);
console.log(`Now listening on port ${PORT}`);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/books', (req, res) => {
  let sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
FROM book_mast, author, category, publisher
WHERE book_mast.aut_id = author.aut_id
AND book_mast.cate_id = category.cate_id
AND book_mast.pub_id = publisher.pub_id`;

  const { category } = req.query;

  if (category) {
    sql += ` AND cate_descrip = '${category}';`
    conn.query(sql, (err, dataRes) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json(dataRes);
    });

  } else {
    conn.query(sql, (err, dataRes) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json(dataRes);
    });
  }

  
});


