const {
  getAllFerments,
  selectAllTypes,
  selectAllStatus,
  insertNewFerment,
  deleteFerment,
} = require("../model");

module.exports = {
  ferments: {
    get: async function (req, res) {
      try {
        const { rows: response } = await getAllFerments();
        res.send(response);
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    },
    post: async function (req, res) {
      try {
        const { body: data } = req;
        await insertNewFerment(data);
        res.sendStatus(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    },
    delete: async function (req, res) {
      console.log(req.body.id);
      const id = req.body.id;
      try {
        deleteFerment(id);
        res.send(200);
      } catch (e) {
        console.group(e);
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
