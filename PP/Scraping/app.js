const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const PORT = 3000;

// Ruta za dohvaćanje podataka
app.get("/scrape", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: true }); //headless: true znači da preglednik neće biti vidljiv (koristi se za automatizaciju)
    const page = await browser.newPage();
    await page.goto("https://www.rijeka.hr/");

    const naslov = await page.title();

    // Dohvati samo prvu vijest
    const najnovijaVijest = await page.$eval(
      //page.$eval traži prvi HTML element koji odgovara selektoru .module-homepage-news h3 a
      ".module-homepage-news h3 a",
      (el) => ({
        tekst: el.textContent.trim(),
        link: el.href,
      })
    );

    await browser.close(); //zatvaraš browser da ne troši resurse

    // Vraćamo samo jednu vijest
    res.json({ naslov, vijest: najnovijaVijest });
  } catch (error) {
    console.error(error);
    res.status(500).send("Greška pri dohvaćanju podataka");
  }
});

// Poslužujemo index.html
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
});
