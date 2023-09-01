const express = require("express");
const { Pool } = require("pg");
const app = express();
require("dotenv").config();

const PORT = 8001;

console.log("Process ID", process.pid);
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

app.get("/data", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "insert into users(name) select CONCAT('NAME_', generate_series) from generate_series(1, 10000) "
    );
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ e });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
