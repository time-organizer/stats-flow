const express = require('express');
const app = express();
const tasksNumber = require('./widgets/tasksNumber');
const completedTasksNumber = require('./widgets/completedTasksNumber');

app.use(tasksNumber);
app.use(completedTasksNumber);

module.exports = app;
