const express = require('express');
const router = express.Router();
const logger = require('../../../logger');
const getInProgressColumns = require('../../helpers/getInProgressColumns');

const mongoose = require('mongoose');

router.post('/in-progress-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const inProgressColumns = await getInProgressColumns(boardId);
    const inProgressColumnsIds = inProgressColumns
      .map(column => column._id.toString());

    const inProgressTasks = await mongoose.connection.db.collection('tasks')
      .find({ columnId: { $in: inProgressColumnsIds } })
      .toArray();

    res
      .status(200)
      .send({ inProgressTasks: inProgressTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
