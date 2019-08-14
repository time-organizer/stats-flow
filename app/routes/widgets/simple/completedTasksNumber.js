const express = require('express');
const router = express.Router();
const logger = require('../../../../logger');
const columnTypes = require('../../../utilities/columnTypes');
const getTasksWithChosenType = require('../../../helpers/getTasksWithChosenType');

router.post('/completed-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const completedTasks = await getTasksWithChosenType(boardId, columnTypes.COMPLETE);

    res
      .status(200)
      .send({ tasksNumber: completedTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
