'use strict';

const express = require('express'); 
const app = express();
app.use('/assets', express.static('assets')); //megadjuk azt a mappát, ami a static fájlokat (pl css) tartlamazza

app.listen(3000, function(){
    console.log('app is listening on port 3000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


