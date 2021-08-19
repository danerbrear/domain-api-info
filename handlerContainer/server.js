'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    console.log("Testing this!");
    res.send('Goodbye World');
});

app.post('/'), (req, res) => {
    res.send('Nice post!')
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);