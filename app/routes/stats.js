const express = require('express');
const app = express();
const tasksNumber = require('./widgets/simple/allTasksNumber');
const completedTasksNumber = require('./widgets/simple/completedTasksNumber');
const inProgressTasksNumber = require('./widgets/simple/inProgressTasksNumber');
const blockedTasksNumber = require('./widgets/simple/blockedTasksNumber');
const backlogTasksNumber = require('./widgets/simple/backlogTasksNumber');
const ignoredTasksNumber = require('./widgets/simple/ignoredTasksNumber');
const tasksNumberChart = require('./widgets/charts/tasksNumberChart');

app.use(tasksNumber);
app.use(completedTasksNumber);
app.use(inProgressTasksNumber);
app.use(blockedTasksNumber);
app.use(backlogTasksNumber);
app.use(ignoredTasksNumber);
app.use(tasksNumberChart);

module.exports = app;
