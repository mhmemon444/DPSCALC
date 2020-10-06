const path = require('path')
const express = require('express');

const request = require('request');

const server = express();
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../FRONTEND/public')

server.use(express.static(publicDirectoryPath));

server.get('', (req, res) => { // route :: 'app.com' -> ( --> direct to homepage <-- )
    res.sendFile( path.join(__dirname, '../FRONTEND/public/dpscalc.html') )
})

server.listen(port, () => {
    console.log("Server is up on port " + port)
})

