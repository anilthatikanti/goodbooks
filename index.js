const express = require("express");
const { open } = require("sqlite");
const app = express();

const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "goodreads.db");
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("server is running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();
