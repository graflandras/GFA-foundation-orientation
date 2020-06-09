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

////////////////////////////////////////////////////////////

// random szám posthoz
function randomNumber() {
  const getDigit = () =>
    Math.floor(Math.random() * 10);
  return Array.from({ length: 4 }, getDigit).join('');
}

// form endpoint
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
    } else { //visszaküldjük clientnek mert ezt kérte a feladat
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

// redirect az eredeti url-re alias alapján [NINCS FRONTEND]
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

// tárolt adatok secret code nélküli kilistázása jsonként [NINCS FRONTEND]
app.get('/api/links', (req, res) => {
  conn.query('SELECT id, url, alias, hitCount FROM urlStore;', (err, storedData) => {
    if (err) {
      res.status(400);
    } else {
      res.json(storedData);
    }
  });
});

// törlés ALIAS ALAPJÁN [NINCS FRONTEND] a secretcode-ot body-ban kell küldeni jsonként
app.delete('/api/links/:alias', (req, res) => { //:név -nek meg kell egyeznie a const { név } = req.params -szal
  const { alias } = req.params;
  const { secretCode } = req.body;
  conn.query('SELECT * FROM urlStore;', (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'internal server error'
      });
      return;
    }
    const result = rows.find(row => row.alias == alias);
    console.log(alias);
    console.log(result);
    if (result === undefined) {
      res.status(404).json({
        error: 'alias doesn\'t exist'
      });
    } else if (result.secretCode != secretCode) {
      res.status(403).json({
        error: 'secret code doesn\'t match'
      });
    } else {
      conn.query(`DELETE FROM urlStore WHERE alias = '${alias}';`, (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'internal server error'
          });
          return;
        } else {
          res.status(200).json({
            success: 'deleted item'
          });
        }
      });
    }
  });
});

////////////////////////////////////////////////////////////

// adott alias lekérése jelszóval, átirányítás
app.post(`/api/about`, (req, res) => {
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
        pathTo: `/${result.alias}`
      });
    }
  });
});

// about.html renderelés
app.get('/:id', (req, res) => {
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

//PUT [NINCS FRONTEND, BODY-BAN KELL KÜLDENI, NEM LÉTEZŐ ID NINCS KEZELVE!]
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

//PATCH [NINCS FRONTEND, BODY-BAN KELL KÜLDENI, NEM LÉTEZŐ ID NINCS KEZELVE!]
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