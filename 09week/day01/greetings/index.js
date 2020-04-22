const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');  //We use app.set('view engine', 'ejs'); to tell express to use EJS as our templating engine Express will automatically look inside the views/ folder for template files

// home page
app.get('/', (req, res) => {
  res.render('home', {
      name: req.query.name || 'Guest' // vagy a megadott név, vagy alapból Guest
    });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});