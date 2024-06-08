const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize]);

app.get('/',(req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/api/products', (req, res) => {
  res.status(200).send('Products');
});


app.get('/api/items', (req, res) => {
  res.status(200).send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});