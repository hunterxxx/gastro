const express = require('express')
const app = express()
const axios = require('axios');
const port = 5000

//app.get('/chef', (req, res) => res.send('Hello World!'))
app.post('/start', (req, res, next) => {
    axios
        .post(
            `http://localhost:3000/admin`
        )
        .then(res => res.send("hello"))
        .catch(err => next(err));
    console.log("success")
})

app.listen(port, () => console.log(`Listening on port ${port}`));
