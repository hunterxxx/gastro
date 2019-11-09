const express = require('express');
const app = express();
const port = 5000;

app.post('/start', (req, res) => {
    res.send('ok hahah');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
