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

module.exports = logger;