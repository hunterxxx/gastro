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

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.post('/start', (req, res) => {
<<<<<<< HEAD
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
=======
    const { name, numClients } = req.body;
    console.log('Name:', name);
    console.log('Num clients:', numClients);
    res.send('alter button title');
>>>>>>> fff8726cc478219408c94922481ed3d6254944d3
});



io.listen(port2);
app.listen(port, () => console.log(`Listening on port ${port}`));
