const express = require('express');

const server = express();

server.get('', (req, res) => { // route :: 'app.com' -> ( --> direct to homepage <-- )
    res.send('Hello express!')
})

server.get('/help', (req, res) => { // (( ROUTING EXAMPLE )) route :: 'app.com/help' -> ( --> direct to help page <-- )
    res.send('Help page')
})

server.listen(3000, () => {
    console.log("Server is up on port 3000.")
})