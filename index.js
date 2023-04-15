const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/prereqs/:year/:term/:course/:section', async (req, res) => {
    const apiUrl = `https://coursys.sfu.ca/browse/info/${req.params.year}${req.params.term}-${req.params.course}-${req.params.section}?outline=yes`;
    try {
        const response = await axios.get(apiUrl);
        const prereqs = response.data;
        res.send(prereqs);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
}); 

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
    