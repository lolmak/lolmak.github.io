const express = require('express');
const app = express();

app.get('/getCode', (req, res) => {
  res.send(code);
  console.log('Код передан');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});