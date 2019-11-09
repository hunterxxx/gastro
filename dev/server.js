const express = require('express')
const app = express()
const axios = require('axios');
const port = 5000

//app.get('/chef', (req, res) => res.send('Hello World!'))
app.post('/start', (req, res, next) => {
    res.send('ok');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
