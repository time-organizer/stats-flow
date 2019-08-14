const express = require('express');
const router = express.Router();
const logger = require('../../../logger');
const columnTypes = require('../../utilities/columnTypes');
const getTasksWithChosenType = require('../../helpers/getTasksWithChosenType');

router.post('/backlog-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const backlogTasks = await getTasksWithChosenType(boardId, columnTypes.BACKLOG);

    res
      .status(200)
      .send({ tasksNumber: backlogTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
