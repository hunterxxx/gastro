const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
const port = 5000;
const port2 = 8000;
var clickCount = 0;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/start', (req, res) => {
    res.send("hello")
});

io.on('connection', (client) => {
    //when the server receives clicked message, do this
    client.on('clicked', function (data) {
        clickCount++;
        console.log("clicked")
        //send a message to ALL connected clients
        io.emit('buttonUpdate', clickCount);
    });
});



io.listen(port2);
app.listen(port, () => console.log(`Listening on port ${port}`));
