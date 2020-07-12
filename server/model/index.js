db = require("../DBHelpers");

module.exports = {
  getAllFerments: function () {
    return db.query("SELECT * FROM ferments");
  },
};

module.exports.getAllFerments().then((res) => console.log(res));
