const express = require('express');
const app = express();
var io1 = require('socket.io').listen(8000);
var io2 = require('socket.io').listen(8001);
const port = 5000;
var clickCount = 0;

app.post('/start', (req, res) => {
    res.send("hello")
});

io1.on('connection', (client) => {
    //when the server receives clicked message, do this
    client.on('clicked', (data) => {
        io1.emit('receivedOrder', clickCount); //send a message to ALL connected clients
    });
});

io2.on('connection', function (client) {
    client.on('clicked2', (data) => {
        io2.emit('startCooking', clickCount); //send a message to ALL connected clients
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
