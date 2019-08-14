const express = require('express');
const router = express.Router();
const _ = require('lodash');

const columnTypes = require('../../../utilities/columnTypes');
const logger = require('../../../../logger');
const getTasksWithChosenType = require('../../../helpers/getTasksWithChosenType');

router.post('/tasks-types-chart', async (req, res) => {
  const { boardId } = req.body;

  try {
    const columnTypesWithTasksNumbers = await _.reduce(columnTypes, async (prev, curr) => {
      const acc = await prev;
      const tasksWithChosenType = await getTasksWithChosenType(boardId, curr);

      acc.push({
        name: curr,
        'Number of tasks': tasksWithChosenType.length,
      });

      return Promise.resolve(acc);
    }, []);

    const data = {
      dataInfo: [{ key: 'Number of tasks' }],
      chartData: columnTypesWithTasksNumbers,
    };

    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send({ message: error });
  }
});

module.exports = router;
