const { getAllFerments } = require("../model");

module.exports = {
  ferments: {
    get: async function (req, res) {
      try {
        const response = await getAllFerments();
        res.send(response.rows);
      } catch (e) {
        console.log(e);
        res.send(400);
      }
    },
  },
};
