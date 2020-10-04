const path = require('path')
const express = require('express');
const request = require('request');
const { read } = require('fs');
fs = require('fs');

const server = express();
const publicDirectoryPath = path.join(__dirname, '../FRONTEND/public')

server.use(express.static(publicDirectoryPath));

server.get('', (req, res) => { // route :: 'app.com' -> ( --> direct to homepage <-- )
    res.sendFile(path.join(__dirname, '../FRONTEND/public/dpscalc.html'))
})


server.listen(3000, () => {
    console.log("Server is up on port 3000.")
})