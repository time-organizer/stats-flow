const mongoose = require('mongoose');

const getInProgressColumns = async (boardId, type) => {
  return await mongoose.connection.db.collection('columns')
    .find({
      boardId,
      type,
    })
    .toArray();
};

module.exports = getInProgressColumns;
