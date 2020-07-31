db = require("../DBHelpers");

module.exports = {
  getAllFerments: function () {
    return db.query(`
    select f.name, f.create_date, f.description, s.status, t.name as type
    from ferments f
    inner join status s
    on f.status_id_fkey = s.id
    inner join type t
    on f.type_id_fkey = t.id
    `);
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
