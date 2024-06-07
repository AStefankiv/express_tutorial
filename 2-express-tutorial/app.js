const express = require('express');
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  const status = res.statusCode;
  console.log(`
  Method: ${method},
  URL: ${url},
  Time: ${time},
  Status: ${status}`
);
  next();
};

app.get('/', logger,(req, res) => {

  res.status(200).send('Home Page');
});

app.get('/about', logger, (req, res) => {
  res.status(200).send('About Page');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});