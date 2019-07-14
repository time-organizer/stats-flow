const express = require('express');
const app = express();
const tasksNumber = require('./widgets/tasksNumber');

app.use(tasksNumber);

module.exports = app;
