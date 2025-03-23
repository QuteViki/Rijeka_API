const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;
const API_KEY = "517a3a0bcfe3f9985901d30285856883";

app.use(cors());

app.get("/vrijeme", async (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Rijeka&appid=${API_KEY}&units=metric`;

  try {
    const odgovor = await axios.get(url);
    const podaci = odgovor.data;

    res.json({
      grad: podaci.name,
      temperatura: podaci.main.temp,
      uvjeti: podaci.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ poruka: "Error fetching weather data." });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
