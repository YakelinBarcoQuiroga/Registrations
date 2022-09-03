const express = require('express');

//Routes
const { registrationsRouter } = require('./routes/registrations.routes');

const app = express();

app.use(express.json());

app.use('/registrations', registrationsRouter);


app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    messagel: `${res.method} ${req.url} doesn't exist`,
  });
});

module.exports = { app };
