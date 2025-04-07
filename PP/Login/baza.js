const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8484",
  database: "rapi",
});

connection.connect((err) => {
  if (err) {
    console.error("Greška pri povezivanju na bazu:", err);
    return;
  }
  console.log("Povezano na MySQL bazu.");
});

module.exports = connection;
