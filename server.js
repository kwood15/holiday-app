const express = require('express');
const holidays = require('./api/data/holidays');

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/holidays', (req, res) => {
  res.send({ holidays });
});

app.get('/api/holiday/:seoPath/:productId', (req, res) => {
  const matchedHolidays = holidays.Holidays.filter(
    item => item.ProductId.toString() === req.params.productId
  );
  matchedHolidays.map(holiday => res.send({ holiday }));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
