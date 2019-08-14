const express = require('express');
const router = express.Router();
const logger = require('../../../../logger');

const Task = require('../../../models/Task');

router.post('/all-tasks', (req, res) => {
  const { boardId } = req.body;

  Task.countDocuments({ boardId })
    .then((tasksNumber) => {
      res.status(200).send({ tasksNumber: tasksNumber.toString() });
    })
    .catch(error => {
      logger.error(error);
      res.status(500).send({ message: error });
    });
});

module.exports = router;
