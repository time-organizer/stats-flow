const express = require('express');
const router = express.Router();
const logger = require('../../../logger');
const columnTypes = require('../../utilities/columnTypes');
const getTasksWithChosenType = require('../../helpers/getTasksWithChosenType');

router.post('/in-progress-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const inProgressTasks = await getTasksWithChosenType(boardId, columnTypes.IN_PROGRESS);

    res
      .status(200)
      .send({ tasksNumber: inProgressTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
