db = require("../DBHelpers");

module.exports = {
  getAllFerments: function () {
    return db.query("SELECT * FROM ferments");
  },

  selectAllTypes: function () {
    return db.query("SELECT * FROM type");
  },

  insertNewFerment: function (data) {
    const { name, description, startDate, typeId, statusId } = data;
    return db.query("");
  },

  selectAllStatus: function () {
    return db.query("SELECT * FROM status");
  },
};
