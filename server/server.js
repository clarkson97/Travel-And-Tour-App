const express = require('express');
require('dotenv').config();

const app = express();
let Port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
