const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});