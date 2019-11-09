const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.post('/start', (req, res) => {
    const { name, numClients } = req.body;
    console.log('Name:', name);
    console.log('Num clients:', numClients);
    res.send('alter button title');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
