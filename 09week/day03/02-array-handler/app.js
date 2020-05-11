const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;
  if (what && numbers && numbers.length !== 0) {
    if (what == 'sum') {
      let sumResult = 0;
      numbers.forEach(e => {
        sumResult += e;
      });
      res.json({
        'result': `${sumResult}`
      });

    } else if (what == 'multiply') {
      let multiplyResult = 1;
      numbers.forEach(e => {
        multiplyResult *= e;
      });
      res.json({
        'result': `${multiplyResult}`
      });

    } else if (what == 'double') {
      const doubledArray = numbers.map(e => e * 2);
      res.json({
        'result': `${doubledArray}`
      });
    }
  } else {
    res.json({
      'error': 'Please provide numbers AND what to do with them'
    });
  }
});

app.listen(8080);
console.log(`Now listening on port 8080`);