'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));

// CONFIGURATION
const conn = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// CONNECT (NE HASZNÁLJUK, MAX CHECKRE, AZTÁN TÖRLÉS)
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
  return Math.floor(1000 + Math.random() * 9000);
}

// form post
app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  console.log(req.body);
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

// redirect az eredeti url-re alias alapján
app.get('/a/:id', (req, res) => {
  const { id } = req.params; // /:id
  conn.query('SELECT * FROM urlStore;', (err, rows) => {
      const result = rows.find(row => row.alias == id); // a táblából kinyerjük az aliast tartalmazó TELJES sort
      // console.log(`result: ${JSON.stringify(result)}`);  JSON.stringify nélkül a result [object object]
      if (result === undefined) { // ha nincs találat
        res.status(404).json({ 
          error: "alias doesn't exist"
        });
        return;
      } else {
        conn.query(`UPDATE urlStore SET hitCount = hitCount + 1 WHERE alias = '${id}';`, (err, rows) => {
          if (err) {
            console.log(err.message);
            res.status(500).json({
              error: 'internal server error'
            });
            return;
          } else {
            const redirUrl = result.url;
            res.status(301).redirect(redirUrl);
          }
        });
      }
    });
});

// tárolt adatok secret code nélküli kilistázása jsonként
app.get('/api/links', (req, res) => {
  conn.query('SELECT id, url, alias, hitCount FROM urlStore;', (err, storedData) => {
    if (err) {
      res.status(400);
    } else {
      res.json(storedData);
    }
  });
});

app.delete('/api/links/:id', (req, res) => {
  const { id } = req.params;
  const { secretCode } = req.body;
  conn.query('SELECT * FROM urlStore;', (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'internal server error'
      });
      return;
    }
    const result = rows.find(row => row.id == id);
    if (result === undefined) {
      res.status(404).json({
        error: "id doesn't exist"
      });
    } else if (result.secretCode != secretCode) {
      res.status(403).json({
        error: "secret code doesn't match"
      });
    } else {
      conn.query(`DELETE FROM urlStore WHERE id = ${id};`, (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'internal server error'
          });
          return;
        } else {
          res.status(204).json({
            success: 'deleted item'
          });
        }
      });
    }
  });
});

/* 
gyakorlás: 
1 - queryvel írni valamit
2 - adatokat másik oldalon táblázatban megjeleníteni
3 - PUT, PATCH
4 - form, eventlistener

*/


app.listen(PORT);
console.log(`Now listening on port ${PORT}`)