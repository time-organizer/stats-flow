const express = require('express');
const router = express.Router();
const logger = require('../../../logger');
const columnTypes = require('../../utilities/columnTypes');
const getTasksWithChosenType = require('../../helpers/getTasksWithChosenType');

router.post('/blocked-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const blockedTasks = await getTasksWithChosenType(boardId, columnTypes.BLOCKED);

    res
      .status(200)
      .send({ tasksNumber: blockedTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
