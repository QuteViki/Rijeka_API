const express=require ('express');
const axios = require ('axios');
const cors =require('cors');
const app = express();
const port=3000;

app.use(cors());

app.get('/dostupnost', async (req, res) => {
    try {
        const response = await axios.get('https://www.rijeka-plus.hr/wp-json/restAPI/v1/parkingAPI');
        console.log('Povratni podaci:', response.data);
        res.json(response.data); 
    } catch (error) {
        console.error('Greška dohvata parking API:', error);
        res.status(500).send('Greška kod dohvata sadržaja');
    }
});

app.listen(port, ()=>
{
    console.log(`Server radi na portu ${port}`);
});