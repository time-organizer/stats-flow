require('dotenv').config();
const verifyToken = require('./app/middlewares/verifyToken');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use('/assets', express.static('assets'));

require('./db/index');

const apiRoutes = require('./app/routes/stats');
app.use('/stats', verifyToken, apiRoutes);

app.get('/health', (req, res) => {
  res.send('Time organizer stats-flow is fine');
});

module.exports = app;
