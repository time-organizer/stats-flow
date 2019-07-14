const bodyParser = require('body-parser');
require('dotenv').config();
const verifyToken = require('./app/middlewares/verifyToken');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

require('./db/index');

const statsRoutes = require('./app/routes/stats');
app.use('/stats', verifyToken, statsRoutes);

app.get('/health', (req, res) => {
  res.send('Time organizer stats-flow is fine');
});

module.exports = app;
