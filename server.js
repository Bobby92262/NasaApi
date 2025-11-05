const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./nasaApiOpenapi.json');
const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/apod/today', async (req, res) => {
    try{
        const response = await axios.get(nasaUrl);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({error: 'NASA API is currently unavailable. Please try again later.'});
    }
});

app.get('/apod/date', async (req, res) => {
    const { data } = req.query;
    try{
        const response = await axios.get(`${nasaUrl}&date=${date}`);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch APOD for the given date.'});
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));