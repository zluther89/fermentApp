const { getAllFerments } = require("../model");

module.exports = {
  ferments: {
    get: async function (req, res) {
      try {
        const ferments = await getAllFerments();
        res.send(ferments);
      } catch (e) {
        console.log(e);
        res.send(400);
      }
    },
  },
};
