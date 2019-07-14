const express = require('express');
const router = express.Router();
const logger = require('../../../logger');
const getCompletedColumns = require('../../helpers/getCompletedColumns');

const mongoose = require('mongoose');

router.post('/completed-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const completedColumns = await getCompletedColumns(boardId);
    const completedColumnsIds = completedColumns
      .map(column => column._id.toString());

    const completedTasks = await mongoose.connection.db.collection('tasks')
      .find({ columnId: { $in: completedColumnsIds } })
      .toArray();

    res
      .status(200)
      .send({ completedTasksNumber: completedTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
