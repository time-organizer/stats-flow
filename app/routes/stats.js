const express = require('express');
const app = express();
const tasksNumber = require('./widgets/allTasksNumber');
const completedTasksNumber = require('./widgets/completedTasksNumber');
const inProgressTasksNumber = require('./widgets/inProgressTasksNumber');
const blockedTasksNumber = require('./widgets/blockedTasksNumber');
const backlogTasksNumber = require('./widgets/backlogTasksNumber');
const ignoredTasksNumber = require('./widgets/ignoredTasksNumber');

app.use(tasksNumber);
app.use(completedTasksNumber);
app.use(inProgressTasksNumber);
app.use(blockedTasksNumber);
app.use(backlogTasksNumber);
app.use(ignoredTasksNumber);

module.exports = app;
