const path = require('path')
const express = require('express');

const server = express();
const publicDirectoryPath = path.join(__dirname, '../../FRONTEND/public')

server.use(express.static(publicDirectoryPath));

server.get('', (req, res) => { // route :: 'app.com' -> ( --> direct to homepage <-- )
    res.sendFile( path.join(__dirname, '../../FRONTEND/public/pages/index.html') )
})

server.get('/help', (req, res) => { // (( ROUTING EXAMPLE )) route :: 'app.com/help' -> ( --> direct to help page <-- )
    res.sendFile( path.join(__dirname, '../../FRONTEND/public/pages/help.html') )
})

server.listen(3000, () => {
    console.log("Server is up on port 3000.")
})