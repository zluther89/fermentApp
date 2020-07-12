require("dotenv").config({ path: "../secrets/.env" });
const { Pool } = require("pg");

const pool = new Pool();

module.exports = pool;
