const express = require('express');
const app = express();
const tasksNumber = require('./widgets/tasksNumber');
const completedTasksNumber = require('./widgets/completedTasksNumber');
const inProgressTasksNumber = require('./widgets/inProgressTasksNumber');

app.use(tasksNumber);
app.use(completedTasksNumber);
app.use(inProgressTasksNumber);

module.exports = app;
