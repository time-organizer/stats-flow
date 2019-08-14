const express = require('express');
const router = express.Router();
const logger = require('../../../../logger');
const columnTypes = require('../../../utilities/columnTypes');
const getTasksWithChosenType = require('../../../helpers/getTasksWithChosenType');

router.post('/ignored-tasks', async (req, res) => {
  const { boardId } = req.body;

  try {
    const ignoredTasks = await getTasksWithChosenType(boardId, columnTypes.IGNORED);

    res
      .status(200)
      .send({ tasksNumber: ignoredTasks.length });
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send(error);
  }
});

module.exports = router;
