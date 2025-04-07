const express = require("express");
const bodyParser = require("body-parser");
const db = require("./baza"); // povezivanje sa bazom
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { korisnicko_ime, lozinka } = req.body;

  const sql = "SELECT * FROM Korisnik WHERE Korisnicko_ime = ? AND Lozinka = ?";
  db.query(sql, [korisnicko_ime, lozinka], (err, results) => {
    if (err) {
      console.error("Greška u upitu:", err);
      return res.status(500).send("Greška na serveru");
    }

    if (results.length > 0) {
      // Prijava uspješna
      res.redirect = "/dobrodosli.html";
    } else {
      // Neispravni podaci
      res.status(401).send("Neispravno korisničko ime ili lozinka.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server radi na http://localhost:${port}`);
});
