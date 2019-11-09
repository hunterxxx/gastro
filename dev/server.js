const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 5000;
const port2 = 8000;
var clickCount = 0;

app.post('/start', (req, res) => {
    res.send("hello")
});

app.post('/decision', (req, res) => {
    const persons = req.body.persons;
    const restaurant = req.body.restaurant;

    console.log(persons)
    console.log(restaurant)
});

io.on('connection', (client) => {
    //when the server receives clicked message, do this
    client.on('clicked', function (data) {
        clickCount++;
        io.emit('buttonUpdate', clickCount); //send a message to ALL connected clients
    });
});

io.listen(port2);
app.listen(port, () => console.log(`Listening on port ${port}`));
