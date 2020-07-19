const { getAllFerments, selectAllTypes, selectAllStatus } = require("../model");
const { isFunctionDeclaration } = require("typescript");

module.exports = {
  ferments: {
    get: async function (req, res) {
      try {
        const response = await getAllFerments();
        res.send(response.rows);
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    },
  },
  types: {
    get: async function (req, res) {
      try {
        const { rows: response } = await selectAllTypes();
        res.send(response);
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    },
  },
  status: {
    get: async function (req, res) {
      try {
        const { rows: response } = await selectAllStatus();
        res.send(response);
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    },
  },
};
