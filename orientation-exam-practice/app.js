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

// mySQL konfigurálás
const conn = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
// mySQL kapcsolódás
conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

// index.html renderelés
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/index.html'));
});

// random szám posthoz
let randomNumber = () => {
  Math.floor(Math.random() * 10);
  return Array.from({length: 4}, getDigit).join('');
}

// post shortener form
app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  let secretCode = randomNumber();
  const sqlQueryInsert = `INSERT INTO urlStore (url, alias, hitCount, secretCode) VALUES ('${url}', '${alias}', 0, ${secretCode});`;
  conn.query(sqlQueryInsert, (err, data) => {
    if (err) {          // az sql fájlban az alias UNIQUE, így ha egy olyat próbálunk hozzáadni, ami már van, errort kapunk. Az üresek ellen a html input required véd
      res.status(400).json({
        error: `${err}`
      });
      return;
    } else { // bepakoljuk az sqlbe
      res.status(200).json({
        "id": data.insertId,
        "url": url,
        "alias": alias,
        "hitCount": 0,
        "secretCode": secretCode
      });
    }
  });
});

// post details form [QUERYSTRINGS]
app.post(`/api/about/`, (req, res) => {
  const { aboutAlias, yourSecretCode } = req.query; // amit a html-ben a formnál megadtunk név/id-nak
  console.log(req.query);
  conn.query(`SELECT * FROM urlStore;`, (err, data) => {
    const result = data.find(row => row.alias == aboutAlias && row.secretCode == yourSecretCode); // [név].find név ugyanaz legyen mint (err, [név])
    if (result === undefined) {
      res.status(404).json({
        error: "No such alias-secret code pair"
      });
      return;
    } else {
      res.json({
        message: 'Succesful',
        pathTo: `/about/${result.alias}`
      });
    }
  });
});

// about.html renderelés
app.get('/about/:id', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/about.html'));
});

// about.html-re adatok lekérése SQL-ből
app.get('/api/about/:id', (req, res) => {
  const { id } = req.params;
  conn.query(`SELECT id, alias, url, hitCount, secretCode FROM urlStore
              WHERE alias = '${id}';`, (err, data) => {
      if (err) {
        res.status(500).send();
        console.log(err.message);
        return;
      }
      console.log(data);
      res.json(data);
    });
});

// PUT
app.put('/put', (req, res) => {
  const givendata = {
    id: req.body.id,
    alias: req.body.alias,
    url: req.body.url,
    hitCount: req.body.hitCount,
    secretCode: req.body.secretCode
  }
  if (givendata != undefined) {
    conn.query(`UPDATE urlstore SET alias ='${givendata.alias}', url='${givendata.url}' WHERE id = '${givendata.id}';`, (err, rows) => {
      console.log(givendata);
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'internal server error'
        });
        return;
      } else {
        res.status(301).send(`ok`);
      }
    });
  }
});

//PATCH
app.patch('/patch', (req, res) => {
  const givendata = {
    id: req.body.id,
    alias: req.body.alias,
    url: req.body.url,
    hitCount: req.body.hitCount,
    secretCode: req.body.secretCode
  }
  if (givendata != undefined) {
    conn.query(`UPDATE urlstore SET alias ='${givendata.alias}', url='${givendata.url}' WHERE id = '${givendata.id}';`, (err, rows) => {
      console.log(givendata);
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'internal server error'
        });
        return;
      } else {
        res.status(301).send(`ok`);
      }
    });
  }
});

app.listen(PORT);
console.log(`Now listening on port ${PORT}`)