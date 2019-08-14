const mongoose = require('mongoose');
const getColumnsWithChosenType = require('./getColumnsWithChosenType');

const getTasksWithChosenType = async (boardId, type) => {
  const columnsWithChosenType =
    await getColumnsWithChosenType(boardId, type);
  const columnsWithChosenTypeIds = columnsWithChosenType
    .map(column => column._id.toString());

  return await mongoose.connection.db.collection('tasks')
    .find({ columnId: { $in: columnsWithChosenTypeIds } })
    .toArray();
};

module.exports = getTasksWithChosenType;
