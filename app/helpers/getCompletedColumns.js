const mongoose = require('mongoose');
const columnTypes = require('../utilities/columnTypes');

const getCompletedColumns = async (boardId) => {
  return await mongoose.connection.db.collection('columns')
    .find({
      boardId,
      type: columnTypes.COMPLETE,
    })
    .toArray();
};

module.exports = getCompletedColumns;
