const express = require('express');
const holidays = require('./api/data/holidays');
const holiday = require('./api/data/holiday');

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/holidays', (req, res) => {
  res.send({ holidays });
});

app.get('/api/holiday/:seoPath/:productId', (req, res) => {
  res.send({ holiday });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
