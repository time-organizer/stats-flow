const mongoose = require('mongoose');
const columnTypes = require('../utilities/columnTypes');

const getInProgressColumns = async (boardId) => {
  return await mongoose.connection.db.collection('columns')
    .find({
      boardId,
      type: columnTypes.IN_PROGRESS,
    })
    .toArray();
};

module.exports = getInProgressColumns;
