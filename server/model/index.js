const db = require("../DBHelpers");

module.exports = {
  getAllFerments: function getAllFerments() {
    return db.query(`
    SELECT f.id, f.name, f.create_date, f.description, s.status, t.name AS type
    FROM ferments f
    INNER JOIN status s
    ON f.status_id_fkey = s.id
    INNER JOIN type t
    ON f.type_id_fkey = t.id
    `);
  },

  deleteFerment: function deleteFerment(fermID) {
    try {
      const q = {
        text: `DELETE FROM ferments where id = $1`,
        values: [fermID],
      };
      return db.query(q);
    } catch (e) {
      console.log("error form model", e);
    }
  },

  insertNewFerment: function insertNewFerment(data) {
    const { name, description, date, typeId, statusId } = data;
    try {
      const q = {
        text: `INSERT INTO ferments(name, description, create_date, type_id_fkey, status_id_fkey)
        values($1, $2, $3, $4, $5)`,
        values: [name, description, date, typeId, statusId],
      };
      return db.query(q);
    } catch (e) {
      console.log("error form model", e);
    }
  },
  selectAllTypes: function selectAllTypes() {
    return db.query("SELECT * FROM type");
  },

  selectAllStatus: function selectAllStatus() {
    return db.query("SELECT * FROM status");
  },
};
