const { Pool } = require("pg");
require("dotenv").config({ path: "../secrets/.env" });

const pool = new Pool();

function testDB() {
  return pool.query("SELECT * FROM ferments");
}

testDB().then((res) => console.log(res));
